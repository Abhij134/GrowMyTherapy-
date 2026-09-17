"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface ElementStyle {
  isImage?: boolean;
  fontSize?: number; // in px
  translateX?: number; // in px
  translateY?: number; // in px
  letterSpacing?: number; // in em
  lineHeight?: number;
  color?: string;
  width?: number; // in % or px
  widthUnit?: "px" | "%";
  height?: number; // in px
  borderRadius?: number; // in px
  scale?: number; // 0.5 to 2.0
  originalFontSize?: number;
  originalColor?: string;
  originalWidth?: number;
  originalHeight?: number;
}

const STORAGE_KEY = "site_visual_editor_saved_edits";

export default function VisualTextEditor() {
  const [active, setActive] = useState(false);
  const [selectedEl, setSelectedEl] = useState<HTMLElement | null>(null);
  const [hoveredEl, setHoveredEl] = useState<HTMLElement | null>(null);
  const [savedEdits, setSavedEdits] = useState<Record<string, ElementStyle>>({});
  const [draftEdits, setDraftEdits] = useState<Record<string, ElementStyle>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ x: number; y: number; initialTx: number; initialTy: number } | null>(null);

  // Show temporary toast message
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Helper to generate unique, stable identifier for element (no random hash)
  const getSelector = useCallback((el: HTMLElement): string => {
    if (el.id) return `#${el.id}`;
    
    let dataId = el.getAttribute("data-editor-id");
    if (!dataId) {
      const tag = el.tagName.toLowerCase();
      let textSnippet = "";
      if (tag === "img") {
        const src = (el as HTMLImageElement).src || "";
        textSnippet = src.split("/").pop()?.split("?")[0].slice(0, 15).replace(/[^a-zA-Z0-9]/g, "") || "img";
      } else {
        textSnippet = el.textContent?.trim().slice(0, 20).replace(/[^a-zA-Z0-9]/g, "") || "el";
      }
      
      // Compute parent index among siblings of same tag to ensure 100% stable unique ID across reloads
      const parent = el.parentElement;
      let siblingIdx = 0;
      if (parent) {
        const siblings = Array.from(parent.querySelectorAll(tag));
        siblingIdx = siblings.indexOf(el);
      }
      
      dataId = `${tag}_${textSnippet}_${siblingIdx}`;
      el.setAttribute("data-editor-id", dataId);
    }
    return `[data-editor-id="${dataId}"]`;
  }, []);

  // Parse numeric px value
  const parsePx = (val: string): number => {
    const parsed = parseFloat(val);
    return isNaN(parsed) ? 0 : parsed;
  };

  // Check if element is a valid text or image target
  const isEditableElement = (el: HTMLElement): boolean => {
    if (!el || el.closest("[data-editor-hud]") || el.closest("header") || el.closest("[data-no-editor]")) return false;
    const tag = el.tagName.toLowerCase();
    
    if (tag === "img" || el.querySelector("img")) return true;
    
    const textTags = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "a", "li", "button", "cite"];
    return textTags.includes(tag) || (el.children.length === 0 && Boolean(el.textContent?.trim()));
  };

  // Apply CSS styles to a DOM element
  const applyStylesToDOM = useCallback((el: HTMLElement, style: ElementStyle) => {
    if (!el) return;
    
    // For images or image wrappers
    const targetEl = el.tagName.toLowerCase() === "img" ? el : (el.querySelector("img") as HTMLElement) || el;
    
    if (style.fontSize !== undefined) {
      el.style.fontSize = `${style.fontSize}px`;
    }
    if (style.translateX !== undefined || style.translateY !== undefined) {
      const tx = style.translateX || 0;
      const ty = style.translateY || 0;
      el.style.transform = `translate(${tx}px, ${ty}px)`;
      if (tx !== 0 || ty !== 0) {
        if (!el.style.position || el.style.position === "static") {
          el.style.position = "relative";
        }
        el.style.zIndex = "40";
      }
    }
    if (style.letterSpacing !== undefined) {
      el.style.letterSpacing = `${style.letterSpacing}em`;
    }
    if (style.lineHeight !== undefined) {
      el.style.lineHeight = `${style.lineHeight}`;
    }
    if (style.color) {
      el.style.color = style.color;
    }

    // Image-specific properties
    if (style.width !== undefined) {
      const unit = style.widthUnit || "px";
      targetEl.style.width = `${style.width}${unit}`;
    }
    if (style.height !== undefined) {
      targetEl.style.height = `${style.height}px`;
    }
    if (style.borderRadius !== undefined) {
      targetEl.style.borderRadius = `${style.borderRadius}px`;
    }
    if (style.scale !== undefined) {
      targetEl.style.transform = `${targetEl.style.transform || ""} scale(${style.scale})`;
    }
  }, []);

  // Re-apply all saved & draft edits across the DOM
  const reapplyAllEdits = useCallback((allEdits: Record<string, ElementStyle>) => {
    Object.entries(allEdits).forEach(([selector, style]) => {
      try {
        const els = document.querySelectorAll<HTMLElement>(selector);
        els.forEach((el) => applyStylesToDOM(el, style));
      } catch (e) {}
    });
  }, [applyStylesToDOM]);

  // Load saved edits on mount & watch DOM changes (for page navigation / dynamic content)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: Record<string, ElementStyle> = JSON.parse(saved);
        setSavedEdits(parsed);
        setDraftEdits(parsed);
        reapplyAllEdits(parsed);
      }
    } catch (e) {
      console.error("Error loading saved edits:", e);
    }
  }, [reapplyAllEdits]);

  // MutationObserver to ensure edits persist during SPA client navigation & rerenders
  useEffect(() => {
    const combined = { ...savedEdits, ...draftEdits };
    if (Object.keys(combined).length === 0) return;

    const observer = new MutationObserver(() => {
      reapplyAllEdits(combined);
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [savedEdits, draftEdits, reapplyAllEdits]);

  // Save draft edits permanently to localStorage
  const handleSaveAll = () => {
    const updated = { ...savedEdits, ...draftEdits };
    setSavedEdits(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      showToast("✓ All edits saved! Changes will persist across pages.");
    } catch (e) {
      showToast("Error saving edits");
    }
  };

  // Mouse over / out / click handlers for selecting text or image elements
  useEffect(() => {
    if (!active) {
      setHoveredEl(null);
      return;
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isEditableElement(target)) {
        setHoveredEl(target);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target === hoveredEl) {
        setHoveredEl(null);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isEditableElement(target)) {
        e.preventDefault();
        e.stopPropagation();

        setSelectedEl(target);

        const selector = getSelector(target);
        const combined = { ...savedEdits, ...draftEdits };
        const existing = combined[selector] || {};
        const isImg = target.tagName.toLowerCase() === "img" || Boolean(target.querySelector("img"));

        const computed = window.getComputedStyle(target);
        const fs = parsePx(computed.fontSize);
        const w = parsePx(computed.width);
        const h = parsePx(computed.height);

        const newStyle: ElementStyle = {
          isImage: isImg,
          fontSize: existing.fontSize !== undefined ? existing.fontSize : fs,
          originalFontSize: fs,
          color: existing.color || computed.color,
          translateX: existing.translateX || 0,
          translateY: existing.translateY || 0,
          width: existing.width !== undefined ? existing.width : w,
          height: existing.height !== undefined ? existing.height : h,
          borderRadius: existing.borderRadius !== undefined ? existing.borderRadius : parsePx(computed.borderRadius),
          ...existing,
        };

        setDraftEdits((prev) => ({ ...prev, [selector]: newStyle }));
        applyStylesToDOM(target, newStyle);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("click", handleClick, true);
    };
  }, [active, hoveredEl, savedEdits, draftEdits, getSelector, applyStylesToDOM]);

  // Dragging support for moving selected text or image with mouse
  useEffect(() => {
    if (!active || !selectedEl) return;

    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target === selectedEl || selectedEl.contains(target)) {
        setIsDragging(true);
        const selector = getSelector(selectedEl);
        const combined = { ...savedEdits, ...draftEdits };
        const currentStyle = combined[selector] || {};
        dragStartRef.current = {
          x: e.clientX,
          y: e.clientY,
          initialTx: currentStyle.translateX || 0,
          initialTy: currentStyle.translateY || 0,
        };
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !dragStartRef.current || !selectedEl) return;
      const dx = e.clientX - dragStartRef.current.x;
      const dy = e.clientY - dragStartRef.current.y;
      const newTx = Math.round(dragStartRef.current.initialTx + dx);
      const newTy = Math.round(dragStartRef.current.initialTy + dy);

      const selector = getSelector(selectedEl);
      const combined = { ...savedEdits, ...draftEdits };
      const currentStyle = combined[selector] || {};
      const updatedStyle: ElementStyle = {
        ...currentStyle,
        translateX: newTx,
        translateY: newTy,
      };

      applyStylesToDOM(selectedEl, updatedStyle);
      setDraftEdits((prev) => ({ ...prev, [selector]: updatedStyle }));
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      dragStartRef.current = null;
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [active, selectedEl, isDragging, savedEdits, draftEdits, getSelector, applyStylesToDOM]);

  // Keyboard Nudge (Arrow Keys)
  useEffect(() => {
    if (!active || !selectedEl) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const isInput = ["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName);
      if (isInput) return;

      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.code)) {
        e.preventDefault();
        const step = e.shiftKey ? 10 : 1;
        const selector = getSelector(selectedEl);
        const combined = { ...savedEdits, ...draftEdits };
        const current = combined[selector] || {};
        let tx = current.translateX || 0;
        let ty = current.translateY || 0;

        if (e.code === "ArrowLeft") tx -= step;
        if (e.code === "ArrowRight") tx += step;
        if (e.code === "ArrowUp") ty -= step;
        if (e.code === "ArrowDown") ty += step;

        const updatedStyle = { ...current, translateX: tx, translateY: ty };
        applyStylesToDOM(selectedEl, updatedStyle);
        setDraftEdits((prev) => ({ ...prev, [selector]: updatedStyle }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active, selectedEl, savedEdits, draftEdits, getSelector, applyStylesToDOM]);

  // Update a specific style property for selected element and auto-persist to localStorage
  const updateStyleProperty = (key: keyof ElementStyle, value: any) => {
    if (!selectedEl) return;
    const selector = getSelector(selectedEl);
    const combined = { ...savedEdits, ...draftEdits };
    const current = combined[selector] || {};
    const updatedStyle = { ...current, [key]: value };

    applyStylesToDOM(selectedEl, updatedStyle);
    const updatedEdits = { ...combined, [selector]: updatedStyle };
    setDraftEdits(updatedEdits);
    setSavedEdits(updatedEdits);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEdits));
    } catch (e) {}
  };

  // Reset selected element styles
  const handleResetCurrent = () => {
    if (!selectedEl) return;
    const selector = getSelector(selectedEl);
    
    // Clear inline DOM styles
    selectedEl.style.fontSize = "";
    selectedEl.style.transform = "";
    selectedEl.style.letterSpacing = "";
    selectedEl.style.lineHeight = "";
    selectedEl.style.color = "";
    selectedEl.style.width = "";
    selectedEl.style.height = "";
    selectedEl.style.borderRadius = "";

    const img = selectedEl.querySelector("img");
    if (img) {
      img.style.width = "";
      img.style.height = "";
      img.style.borderRadius = "";
      img.style.transform = "";
    }

    const nextSaved = { ...savedEdits };
    delete nextSaved[selector];
    setSavedEdits(nextSaved);

    const nextDraft = { ...draftEdits };
    delete nextDraft[selector];
    setDraftEdits(nextDraft);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextSaved));
      showToast("Reset selected element");
    } catch (e) {}
  };

  // Reset all saved & draft edits across the entire site
  const handleResetAll = () => {
    if (!window.confirm("Are you sure you want to reset all text and image edits to default?")) return;

    const combined = { ...savedEdits, ...draftEdits };
    Object.keys(combined).forEach((selector) => {
      try {
        const els = document.querySelectorAll<HTMLElement>(selector);
        els.forEach((el) => {
          el.style.fontSize = "";
          el.style.transform = "";
          el.style.letterSpacing = "";
          el.style.lineHeight = "";
          el.style.color = "";
          el.style.width = "";
          el.style.height = "";
          el.style.borderRadius = "";
          const img = el.querySelector("img");
          if (img) {
            img.style.width = "";
            img.style.height = "";
            img.style.borderRadius = "";
            img.style.transform = "";
          }
        });
      } catch (e) {}
    });

    setSavedEdits({});
    setDraftEdits({});
    localStorage.removeItem(STORAGE_KEY);
    setSelectedEl(null);
    showToast("All edits reset to original defaults");
  };

  const selectedSelector = selectedEl ? getSelector(selectedEl) : null;
  const combinedEdits = { ...savedEdits, ...draftEdits };
  const currentStyle = selectedSelector ? combinedEdits[selectedSelector] || {} : {};
  
  const isImageTarget = selectedEl ? (selectedEl.tagName.toLowerCase() === "img" || Boolean(selectedEl.querySelector("img"))) : false;
  
  const currentFontSize = currentStyle.fontSize || (selectedEl ? parsePx(window.getComputedStyle(selectedEl).fontSize) : 16);
  const currentTx = currentStyle.translateX || 0;
  const currentTy = currentStyle.translateY || 0;
  const currentColor = currentStyle.color || "#000000";
  const currentWidth = currentStyle.width || (selectedEl ? parsePx(window.getComputedStyle(selectedEl).width) : 200);
  const currentHeight = currentStyle.height || (selectedEl ? parsePx(window.getComputedStyle(selectedEl).height) : 200);
  const currentBorderRadius = currentStyle.borderRadius || 0;

  const hasUnsavedChanges = JSON.stringify(savedEdits) !== JSON.stringify(combinedEdits);

  return (
    <div data-editor-hud="true">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100000] bg-[#2C6E8A] text-white px-5 py-2.5 rounded-full shadow-2xl font-sans text-xs tracking-wide font-medium flex items-center gap-2 animate-bounce">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Visual outline on hovered element */}
      {active && hoveredEl && hoveredEl !== selectedEl && (
        <style font-editor-styles="true">{`
          [data-editor-id="${hoveredEl.getAttribute("data-editor-id")}"] {
            outline: 2px dashed #749D97 !important;
            outline-offset: 4px !important;
            cursor: pointer !important;
          }
        `}</style>
      )}

      {/* Visual outline on selected element */}
      {active && selectedEl && (
        <style font-editor-styles="true">{`
          [data-editor-id="${selectedEl.getAttribute("data-editor-id")}"] {
            outline: 2px solid #2C6E8A !important;
            outline-offset: 4px !important;
            cursor: move !important;
          }
        `}</style>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => {
          setActive(!active);
          if (active) setSelectedEl(null);
        }}
        className={`fixed bottom-6 right-6 z-[99999] flex items-center gap-2.5 px-4 py-3 rounded-full shadow-2xl font-sans text-xs tracking-wider uppercase font-medium transition-all duration-300 ${
          active
            ? "bg-[#2C6E8A] text-white ring-4 ring-[#749D97]/30 scale-105"
            : "bg-[#2C312E] text-white hover:bg-[#749D97] hover:scale-105"
        }`}
      >
        <span className="text-base">{active ? "✕" : "✏️"}</span>
        <span>{active ? "Close Editor" : "Text & Image Editor"}</span>
      </button>

      {/* Control Panel (HUD) when an element is selected */}
      {active && selectedEl && (
        <div className="fixed bottom-20 right-6 z-[99999] w-[340px] bg-[#2C312E] text-white rounded-2xl shadow-2xl border border-white/10 p-5 font-sans text-xs backdrop-blur-md max-h-[85vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${isImageTarget ? "bg-amber-400" : "bg-[#749D97]"}`} />
              <span className="font-serif text-sm font-light text-white tracking-wide">
                Editing: &lt;{selectedEl.tagName.toLowerCase()}&gt; {isImageTarget ? "(Image)" : "(Text)"}
              </span>
            </div>
            <button
              onClick={() => setSelectedEl(null)}
              className="text-white/60 hover:text-white text-base px-1"
            >
              ✕
            </button>
          </div>

          {/* Selected Element Preview */}
          <div className="bg-black/40 px-3 py-2 rounded-lg mb-4 text-white/80 font-mono text-[11px] truncate">
            {isImageTarget ? "📷 Image Component" : `"${selectedEl.textContent?.trim().slice(0, 35) || "Text"}"`}
          </div>

          <div className="space-y-4">
            {/* TEXT CONTROLS */}
            {!isImageTarget && (
              <div>
                <div className="flex justify-between items-center mb-1.5 text-white/80 font-medium">
                  <span>Font Size</span>
                  <span className="text-[#749D97] font-mono text-[11px]">{Math.round(currentFontSize)}px</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateStyleProperty("fontSize", Math.max(8, currentFontSize - 1))}
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center text-sm"
                  >
                    -
                  </button>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={currentFontSize}
                    onChange={(e) => updateStyleProperty("fontSize", Number(e.target.value))}
                    className="flex-1 accent-[#749D97] h-1.5 bg-white/20 rounded-lg cursor-pointer"
                  />
                  <button
                    onClick={() => updateStyleProperty("fontSize", Math.min(140, currentFontSize + 1))}
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center text-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* IMAGE RESIZING CONTROLS */}
            {isImageTarget && (
              <>
                <div>
                  <div className="flex justify-between items-center mb-1.5 text-white/80 font-medium">
                    <span>Image Width</span>
                    <span className="text-amber-400 font-mono text-[11px]">{Math.round(currentWidth)}px</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateStyleProperty("width", Math.max(40, currentWidth - 10))}
                      className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center text-sm"
                    >
                      -
                    </button>
                    <input
                      type="range"
                      min="50"
                      max="1200"
                      value={currentWidth}
                      onChange={(e) => updateStyleProperty("width", Number(e.target.value))}
                      className="flex-1 accent-amber-400 h-1.5 bg-white/20 rounded-lg cursor-pointer"
                    />
                    <button
                      onClick={() => updateStyleProperty("width", currentWidth + 10)}
                      className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5 text-white/80 font-medium">
                    <span>Image Height</span>
                    <span className="text-amber-400 font-mono text-[11px]">{Math.round(currentHeight)}px</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateStyleProperty("height", Math.max(40, currentHeight - 10))}
                      className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center text-sm"
                    >
                      -
                    </button>
                    <input
                      type="range"
                      min="50"
                      max="1000"
                      value={currentHeight}
                      onChange={(e) => updateStyleProperty("height", Number(e.target.value))}
                      className="flex-1 accent-amber-400 h-1.5 bg-white/20 rounded-lg cursor-pointer"
                    />
                    <button
                      onClick={() => updateStyleProperty("height", currentHeight + 10)}
                      className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5 text-white/80 font-medium">
                    <span>Border Radius (Corners)</span>
                    <span className="text-amber-400 font-mono text-[11px]">{currentBorderRadius}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={currentBorderRadius}
                    onChange={(e) => updateStyleProperty("borderRadius", Number(e.target.value))}
                    className="w-full accent-amber-400 h-1.5 bg-white/20 rounded-lg cursor-pointer"
                  />
                </div>
              </>
            )}

            {/* Position X & Y Move Controls */}
            <div>
              <div className="flex justify-between items-center mb-2 text-white/80 font-medium">
                <span>Position (Move / Nudge)</span>
                <span className="text-[#749D97] font-mono text-[11px]">
                  X: {currentTx}px | Y: {currentTy}px
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 w-[140px] mx-auto mb-2">
                <div />
                <button
                  onClick={() => updateStyleProperty("translateY", currentTy - 2)}
                  className="h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center"
                  title="Move Up"
                >
                  ▲
                </button>
                <div />
                <button
                  onClick={() => updateStyleProperty("translateX", currentTx - 2)}
                  className="h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center"
                  title="Move Left"
                >
                  ◀
                </button>
                <button
                  onClick={() => {
                    updateStyleProperty("translateX", 0);
                    updateStyleProperty("translateY", 0);
                  }}
                  className="h-8 rounded-lg bg-[#749D97]/30 hover:bg-[#749D97]/50 text-[#749D97] font-mono text-[10px] flex items-center justify-center"
                  title="Reset Position"
                >
                  ●
                </button>
                <button
                  onClick={() => updateStyleProperty("translateX", currentTx + 2)}
                  className="h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center"
                  title="Move Right"
                >
                  ▶
                </button>
                <div />
                <button
                  onClick={() => updateStyleProperty("translateY", currentTy + 2)}
                  className="h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center"
                  title="Move Down"
                >
                  ▼
                </button>
                <div />
              </div>
              <p className="text-[10px] text-white/50 text-center">
                Tip: Drag with mouse or use Keyboard Arrow Keys
              </p>
            </div>

            {/* Color Control for text */}
            {!isImageTarget && (
              <div className="flex items-center justify-between pt-1">
                <span className="text-white/80 font-medium">Text Color</span>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={currentColor.startsWith("#") ? currentColor : "#2C312E"}
                    onChange={(e) => updateStyleProperty("color", e.target.value)}
                    className="w-7 h-7 rounded-md cursor-pointer border-0 bg-transparent"
                  />
                  <button
                    onClick={() => updateStyleProperty("color", "#000000")}
                    className="px-2 py-1 rounded bg-black text-white text-[10px]"
                  >
                    Black
                  </button>
                  <button
                    onClick={() => updateStyleProperty("color", "#749D97")}
                    className="px-2 py-1 rounded bg-[#749D97] text-white text-[10px]"
                  >
                    Teal
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* SAVE BUTTON */}
          <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
            <button
              onClick={handleSaveAll}
              className={`w-full py-2.5 px-4 rounded-xl font-sans text-xs tracking-wider uppercase font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg ${
                hasUnsavedChanges
                  ? "bg-emerald-600 hover:bg-emerald-500 text-white ring-2 ring-emerald-400/50 scale-[1.02]"
                  : "bg-emerald-800/60 text-white/80 hover:bg-emerald-700"
              }`}
            >
              <span>💾</span>
              <span>Save All Edits Site-Wide</span>
            </button>

            {/* Reset Actions */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handleResetCurrent}
                className="text-white/70 hover:text-white text-[11px] underline"
              >
                Reset Selected Element
              </button>
              <button
                onClick={handleResetAll}
                className="text-red-400 hover:text-red-300 text-[11px] underline"
              >
                Reset All Site Edits
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
