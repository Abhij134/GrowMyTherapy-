"use client";

import { useState, useEffect } from "react";

const PRESET_COLORS = [
  { name: "Current Default (Warm Sand)", hex: "#F2EFEB" },
  { name: "Soft Cream", hex: "#F7F5F0" },
  { name: "Desert Linen", hex: "#F4F0EA" },
  { name: "Warm Taupe", hex: "#E6E0D4" },
  { name: "Sage Tint", hex: "#EAEFEB" },
  { name: "Warm Almond", hex: "#EAE5DC" },
  { name: "Pure White", hex: "#FFFFFF" },
];

export default function ThemeColorPicker() {
  const [color, setColor] = useState("#F2EFEB");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedColor = localStorage.getItem("theme_bg_color");
    if (savedColor) {
      setColor(savedColor);
      document.documentElement.style.setProperty("--site-bg-theme", savedColor);
    }
  }, []);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    document.documentElement.style.setProperty("--site-bg-theme", newColor);
    localStorage.setItem("theme_bg_color", newColor);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      {/* Expanded Color Picker Panel */}
      {isOpen && (
        <div className="mb-3 p-5 bg-white/95 backdrop-blur-md text-[#2C312E] rounded-2xl shadow-2xl border border-stone-200 w-[300px] flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">🎨</span>
              <h4 className="font-serif text-[18px] font-medium text-[#2C312E]">
                Background Color
              </h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-stone-700 text-sm font-bold px-1.5 py-0.5 rounded hover:bg-stone-100 transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Color Picker Input & Hex Display */}
          <div className="flex items-center gap-3 bg-stone-50 p-2.5 rounded-xl border border-stone-200">
            <input
              type="color"
              value={color}
              onChange={(e) => handleColorChange(e.target.value)}
              className="w-10 h-10 rounded-lg cursor-pointer border-0 bg-transparent p-0"
              title="Click to choose custom color"
            />
            <div className="flex flex-col flex-1">
              <span className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold">
                Custom Color Picker
              </span>
              <input
                type="text"
                value={color}
                onChange={(e) => handleColorChange(e.target.value)}
                className="font-mono text-sm uppercase text-[#2C312E] font-medium bg-transparent border-none p-0 focus:outline-none"
              />
            </div>
          </div>

          {/* Preset Swatches */}
          <div>
            <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold mb-2 block">
              Preset Palette
            </span>
            <div className="grid grid-cols-4 gap-2">
              {PRESET_COLORS.map((preset) => (
                <button
                  key={preset.hex}
                  onClick={() => handleColorChange(preset.hex)}
                  title={`${preset.name} (${preset.hex})`}
                  className={`h-9 rounded-lg border transition-all flex items-center justify-center relative ${
                    color.toUpperCase() === preset.hex.toUpperCase()
                      ? "ring-2 ring-[#749D97] ring-offset-2 border-transparent scale-105"
                      : "border-stone-300 hover:scale-105"
                  }`}
                  style={{ backgroundColor: preset.hex }}
                >
                  {color.toUpperCase() === preset.hex.toUpperCase() && (
                    <span className="text-xs text-stone-700 font-bold">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Reset Button */}
          <button
            onClick={() => handleColorChange("#F2EFEB")}
            className="text-[11px] uppercase tracking-widest text-[#749D97] font-semibold text-center hover:underline pt-1"
          >
            Reset to Default (#F2EFEB)
          </button>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 bg-[#2C312E] hover:bg-[#1A1D1B] text-white px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-[12px] uppercase tracking-widest font-medium border border-stone-700"
      >
        <span
          className="w-3.5 h-3.5 rounded-full border border-white/50 shadow-inner"
          style={{ backgroundColor: color }}
        />
        <span>Pick Color</span>
        <span className="text-[10px] text-stone-400 font-mono">({color})</span>
      </button>
    </div>
  );
}
