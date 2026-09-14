// =============================================================================
// lib/content.ts — Single source of truth for all site copy
// All copy is derived from Dr. Maya Reynolds' profile document.
// To update: edit values here; no JSX changes needed.
// =============================================================================

export const site = {
  name: "Maya Reynolds",
  credential: "PsyD · Licensed Clinical Psychologist",
  tagline: "Therapy for anxiety, trauma, and burnout in Santa Monica, CA.",
  url: "https://www.mayareynoldspsyd.com",
};

export const contact = {
  address: "123 W 45th St, Santa Monica, CA 90401",
  city: "Santa Monica, CA",
  phone: "(310) 555-0192",
  email: "hello@mayareynoldspsyd.com",
  // Placeholder: swap in real Calendly or Psychology Today link
  bookingUrl: "#schedule",
};

// -----------------------------------------------------------------------------
// Navigation
// -----------------------------------------------------------------------------
export const nav = {
  links: [
    { label: "About", href: "#about" },
    {
      label: "Specialties",
      href: "#specialties",
      children: [
        { label: "Anxiety & Panic", href: "#anxiety" },
        { label: "Trauma & EMDR", href: "#trauma" },
        { label: "Burnout & Perfectionism", href: "#burnout" },
        { label: "Complex PTSD", href: "#complex-ptsd" },
      ],
    },
    {
      label: "Methods",
      href: "#methods",
      children: [
        { label: "Cognitive Behavioral Therapy", href: "#cbt" },
        { label: "EMDR", href: "#emdr" },
        { label: "Mindfulness-Based", href: "#mindfulness" },
        { label: "Body-Oriented Work", href: "#somatic" },
      ],
    },
    { label: "FAQs", href: "#faqs" },
  ],
  cta: { label: "Contact", href: "#contact" },
};

// -----------------------------------------------------------------------------
// Hero — image LEFT (verified at 1280px), copy RIGHT
// -----------------------------------------------------------------------------
export const hero = {
  eyebrow: "Licensed Clinical Psychologist in Santa Monica, CA",
  // H1: specialty + location + differentiator. Italic accent on last phrase.
  titleStart: "Find steady ground when anxiety, trauma,",
  titleAccent: "or burnout feels relentless.",
  subtext:
    "Many people I work with are high-achieving and self-aware — yet internally exhausted, stuck in overthinking, or quietly bracing for the next hard thing. Therapy can change that.",
  cta: { label: "Schedule a Consultation", href: "#schedule" },
  image: {
    src: "/images/hero_coastal.png",
    alt: "Calm coastal path in Santa Monica — representing clarity and a fresh start",
  },
};

// -----------------------------------------------------------------------------
// Empathy section — centered paragraph, profile language verbatim
// -----------------------------------------------------------------------------
export const empathy = {
  heading: "You're managing — but it's taking everything you have.",
  body: "You show up for work, for the people you love, for your responsibilities. But underneath, something feels off. The worry doesn't stop. The tension stays in your body. Sleep is harder than it should be. You've been carrying this for a while, and you're not sure how much longer you can keep going at this pace. That's a reasonable place to reach out.",
};

// -----------------------------------------------------------------------------
// How I Can Help — 3 service cards (image → title → description)
// Anatomy identical to reference "Who We Help" cards
// -----------------------------------------------------------------------------
export const services = [
  {
    title: "Anxiety & Panic",
    description:
      "Racing thoughts, constant worry, or moments of panic that feel unmanageable. I work with adults who feel \"on edge\" even when nothing is overtly wrong — and we address both the emotional and physiological sides of anxiety.",
    image: {
      src: "/images/card_anxiety.png",
      alt: "Person walking a calm coastal path — representing forward movement through anxiety",
    },
    href: "#anxiety",
  },
  {
    title: "Trauma & EMDR",
    description:
      "Whether it's a single event or years of accumulated stress, trauma shapes how we see ourselves and others. I use EMDR alongside other evidence-based approaches to help clients process the past without being consumed by it.",
    image: {
      src: "/images/card_trauma.png",
      alt: "Hands holding a smooth stone — representing grounding and healing from trauma",
    },
    href: "#trauma",
  },
  {
    title: "Burnout & Perfectionism",
    description:
      "High-achieving doesn't always mean feeling okay. Many of my clients are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through. Therapy becomes a place to slow down and reconnect.",
    image: {
      src: "/images/card_burnout.png",
      alt: "Person resting quietly by a window — representing permission to pause and restore",
    },
    href: "#burnout",
  },
];

// -----------------------------------------------------------------------------
// Quote Banner — full-width image with overlay text (verified structure)
// -----------------------------------------------------------------------------
export const quoteBanner = {
  quote:
    "Therapy works best when clients feel respected, understood, and actively involved in the process.",
  attribution: "— Dr. Maya Reynolds, PsyD",
  image: {
    src: "/images/quote_banner_bg.png",
    alt: "Calm coastal landscape at golden hour",
  },
};

// -----------------------------------------------------------------------------
// Expertise tags — 2-column list
// -----------------------------------------------------------------------------
export const expertise = {
  heading: "Areas of",
  headingAccent: "expertise",
  tags: [
    "Anxiety",
    "Panic Disorder",
    "Trauma",
    "Complex PTSD",
    "EMDR",
    "Burnout",
    "Perfectionism",
    "Cognitive Behavioral Therapy",
    "Mindfulness-Based Therapy",
    "Body-Oriented Work",
  ],
};

// -----------------------------------------------------------------------------
// How I Work — copy left/right, portrait image right, tan bg
// -----------------------------------------------------------------------------
export const howWeWork = {
  heading: "I'm here to make a difference.",
  subheading: "The clients I work with are balancing a great deal — and often, it's hard for them to put themselves first.",
  bodyLeft:
    "Here, your needs are the priority. I take time to deeply understand what you're carrying, and I recognize that no two people's experiences are the same. Personalized therapy means an intentional, tailored approach. If you're ready to do the work, I'm ready to help.",
  bodyRight:
    "Sometimes we'll gently challenge a thought pattern or explore what's underneath a feeling. Other times we'll slow down and work with what's happening in your body. The goal is not just symptom relief — it's helping you develop a stronger, more sustainable relationship with yourself. If you're looking for a therapist who combines practical tools with depth-oriented work, I may be a good fit.",
  cta: { label: "Learn more about my approach", href: "#about" },
  image: {
    src: "/images/how_we_work_portrait.png",
    alt: "Dr. Maya Reynolds in her Santa Monica therapy office",
  },
};

// -----------------------------------------------------------------------------
// Our Office — NEW section (after How I Work)
// -----------------------------------------------------------------------------
export const ourOffice = {
  heading: "A Space Built for Calm",
  body: "My Santa Monica office is a quiet, private space with natural light and a comfortable, uncluttered environment. Clients often share that the room itself helps them feel more at ease when they arrive — before we've even started.",
  images: [
    {
      src: "/images/office_interior_1.png",
      alt: "Comfortable armchair in Dr. Reynolds' Santa Monica therapy office with natural light",
    },
    {
      src: "/images/office_interior_2.png",
      alt: "Two chairs facing each other in a calm, private therapy consultation room",
    },
    {
      src: "/images/office_interior_3.png",
      alt: "Warm wooden bookshelf and plants in the therapy office",
    },
  ],
  address: "123 W 45th St, Santa Monica, CA 90401",
  sessionNote: "In-person sessions in Santa Monica · Telehealth available across California",
};

// -----------------------------------------------------------------------------
// Specialties — 2×2 grid (label + description + learn more)
// -----------------------------------------------------------------------------
export const specialties = [
  {
    title: "Anxiety & Panic",
    description:
      "Persistent worry, social anxiety, panic attacks, and the physical tension that doesn't turn off — I work with the full picture of how anxiety shows up in your body and your life.",
    href: "#anxiety",
  },
  {
    title: "Trauma & Complex PTSD",
    description:
      "Single-incident trauma and long-standing patterns from childhood, relationships, or chronic stress. My approach is paced carefully, with safety and stabilization at the center.",
    href: "#trauma",
  },
  {
    title: "Burnout & High-Achievers",
    description:
      "Entrepreneurs, creatives, and professionals who feel disconnected after years of pushing through. Therapy becomes a space to slow down, reconnect, and build more sustainable ways of living.",
    href: "#burnout",
  },
  {
    title: "EMDR Therapy",
    description:
      "Eye Movement Desensitization and Reprocessing (EMDR) is an evidence-based method I use to help clients process difficult memories — reducing their emotional intensity and restoring a sense of safety.",
    href: "#emdr",
  },
];

// -----------------------------------------------------------------------------
// Book CTA — flanking images + centered text + pill button
// -----------------------------------------------------------------------------
export const bookCta = {
  heading: "Ready to feel like yourself again?",
  body: "Coming to therapy is a meaningful decision. I'd love to help you figure out if we're a good fit. Reach out to schedule a free 15-minute consultation call.",
  subtext: "Serving Santa Monica, West LA, and clients across California via telehealth.",
  cta: { label: "Schedule a Consultation", href: "#schedule" },
  imageLeft: {
    src: "/images/cta_flanking_left.png",
    alt: "Gentle hands on a warm sandy beach — compassion and connection",
  },
  imageRight: {
    src: "/images/hero_coastal.png",
    alt: "Calm coastal light in Santa Monica",
  },
};

// -----------------------------------------------------------------------------
// Footer
// -----------------------------------------------------------------------------
export const footer = {
  tagline:
    "Helping adults in Santa Monica and across California find steady ground — through anxiety, trauma, burnout, and the pressures of a fast-paced life.",
  columns: [
    {
      heading: "Navigate",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "#about" },
        { label: "Specialties", href: "#specialties" },
        { label: "Methods", href: "#methods" },
        { label: "FAQs", href: "#faqs" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      heading: "About Dr. Maya",
      links: [
        { label: "My Approach", href: "#about" },
        { label: "Anxiety & Panic", href: "#anxiety" },
        { label: "Trauma & EMDR", href: "#trauma" },
        { label: "Burnout", href: "#burnout" },
      ],
    },
    {
      heading: "Contact",
      lines: [
        "123 W 45th St",
        "Santa Monica, CA 90401",
        "hello@mayareynoldspsyd.com",
        "(310) 555-0192",
      ],
    },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Accessibility", href: "#" },
    { label: "Good Faith Estimate", href: "#" },
  ],
  copyright: `© ${new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.`,
};
