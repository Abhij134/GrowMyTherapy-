// =============================================================================
// lib/content.ts — Single source of truth for all site copy
// All copy is derived from Dr. Maya Reynolds' profile document.
// Sources: maya_content_blueprint.md + refined_landing_page_copy.md
// To update any text: edit values here; no JSX changes needed.
// =============================================================================

export const site = {
  name: "Maya Reynolds",
  credential: "PsyD · Licensed Clinical Psychologist",
  tagline: "Therapy for anxiety, trauma, and burnout in Santa Monica, CA.",
  url: "https://santamonicacounselling.netlify.app",
};

export const contact = {
  address: "123 W 45th St, Santa Monica, CA 90401",
  city: "Santa Monica, CA",
  phone: "(310) 555-0192",
  email: "hello@mayareynoldspsyd.com",
  bookingUrl: "/contact",
  serviceArea:
    "Serving Santa Monica, West LA, Brentwood, Malibu, and clients across California via telehealth.",
};

// -----------------------------------------------------------------------------
// Navigation — real routes per maya_content_blueprint.md
// -----------------------------------------------------------------------------
export const nav = {
  links: [
    {
      label: "About",
      href: "/about",
      children: [
        { label: "About Dr. Maya", href: "/about" },
        { label: "My Approach", href: "/about/approach" },
      ],
    },
    {
      label: "Specialties",
      href: "/specialties/anxiety-panic",
      children: [
        { label: "Anxiety & Panic", href: "/specialties/anxiety-panic" },
        { label: "Trauma & Complex PTSD", href: "/specialties/trauma-complex-ptsd" },
        { label: "Burnout & Perfectionism", href: "/specialties/burnout-perfectionism" },
        { label: "EMDR Therapy", href: "/specialties/emdr" },
      ],
    },
    {
      label: "Methods",
      href: "/methods/cognitive-behavioral-therapy",
      children: [
        { label: "Cognitive Behavioral Therapy", href: "/methods/cognitive-behavioral-therapy" },
        { label: "EMDR", href: "/methods/emdr" },
        { label: "Mindfulness-Based Therapy", href: "/methods/mindfulness-based-therapy" },
        { label: "Body-Oriented Work", href: "/methods/body-oriented-work" },
      ],
    },
    { label: "FAQs", href: "/faqs" },
  ],
  cta: { label: "CONTACT", href: "/contact" },
};

// -----------------------------------------------------------------------------
// Hero — image LEFT (verified 42%), copy RIGHT (58%)
// H1 refined per refined_landing_page_copy.md
// -----------------------------------------------------------------------------
export const hero = {
  eyebrow: "Licensed Clinical Psychologist in Santa Monica, CA",
  titleStart: "Find steady ground when anxiety, trauma,",
  titleAccent: "or burnout",
  titleEnd: "have been running the show.",
  subtext:
    "Many of the people I work with are high-achieving and self-aware — yet internally exhausted, stuck in overthinking, or quietly bracing for the next hard thing. Therapy can change that.",
  cta: { label: "Schedule a Consultation", href: "/contact" },
  ctaSecondary: { label: "See how I can help ↓", href: "#services" },
  image: {
    src: "/images/hero_specialty_new.png",
    alt: "Calm coastal path in Santa Monica — representing clarity and a fresh start",
  },
};

// -----------------------------------------------------------------------------
// Empathy section
// -----------------------------------------------------------------------------
export const empathy = {
  heading: "You're managing — but it's taking everything you have.",
  eyebrow: "AT DR. MAYA REYNOLDS PSY.D. THERAPY WE WANT TO HELP YOU FIND STEADY GROUND.",
  col1: "Whether you're an adult seeking personal growth, struggling with constant anxiety, looking to work through trauma, or facing burnout from high-pressure work, I provide a compassionate, safe space to help you navigate all of life's ups and downs.",
  col2: "You show up for work, for the people you love, for your responsibilities. But underneath, something feels off. The worry doesn't stop. The tension stays in your body. Sleep is harder than it should be. You've been carrying this for a while — and you're not sure how much longer you can keep going at this pace. That's a reasonable place to reach out.",
  image: {
    src: "/images/beach.png",
    alt: "Calm ocean waves washing gently onto a sandy beach",
  },
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
    href: "/specialties/anxiety-panic",
  },
  {
    title: "Trauma & EMDR",
    description:
      "Whether it's a single event or years of accumulated stress, trauma shapes how we see ourselves and others. I use EMDR alongside other evidence-based approaches to help clients process the past without being consumed by it.",
    image: {
      src: "/images/section_trauma.png",
      alt: "Serene grounding space representing healing from trauma and EMDR therapy",
    },
    href: "/specialties/trauma-complex-ptsd",
  },
  {
    title: "Burnout & Perfectionism",
    description:
      "High-achieving doesn't always mean feeling okay. Many of my clients are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through. Therapy becomes a place to slow down and reconnect.",
    image: {
      src: "/images/card_burnout.png",
      alt: "Person resting quietly by a window — representing permission to pause and restore",
    },
    href: "/specialties/burnout-perfectionism",
  },
];

// -----------------------------------------------------------------------------
// Quote Banner
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
// Expertise tags — split into two labeled groups per refined_landing_page_copy.md
// Fixes the spacing glitch: "Areas ofexpertise" → two headed groups
// -----------------------------------------------------------------------------
export const expertise = {
  heading: "Areas of ",
  headingAccent: "expertise",
  groups: [
    {
      label: "Concerns I work with",
      tags: ["Anxiety", "Panic Disorder", "Trauma", "Complex PTSD", "Burnout", "Perfectionism"],
    },
    {
      label: "Approaches I use",
      tags: [
        "EMDR",
        "Cognitive Behavioral Therapy",
        "Mindfulness-Based Therapy",
        "Body-Oriented Work",
      ],
    },
  ],
};

// -----------------------------------------------------------------------------
// How I Work (About Dr. Maya section with portrait)
// Heading updated per refined_landing_page_copy.md
// -----------------------------------------------------------------------------
export const howWeWork = {
  heading: "A steady, collaborative space — built around you.",
  subheading:
    "The clients I work with are balancing a great deal — and often, it's hard for them to put themselves first.",
  bodyLeft:
    "Here, your needs are the priority. I take time to deeply understand what you're carrying, and I recognize that no two people's experiences are the same. Personalized therapy means an intentional, tailored approach. If you're ready to do the work, I'm ready to help.",
  bodyRight:
    "Hi, I'm Dr. Maya Reynolds. I'm a licensed clinical psychologist (PsyD) helping adults across Santa Monica and California find steady ground — through anxiety, trauma, burnout, and the pressures of a fast-paced life. My work blends evidence-based methods with a warm, collaborative style.",
  cta: { label: "Learn more about my approach →", href: "/about/approach" },
  image: {
    src: "/images/how_we_work_portrait.png",
    alt: "Dr. Maya Reynolds in her Santa Monica therapy office",
  },
};

// -----------------------------------------------------------------------------
// NEW: How We Work Steps — 3-step numbered list
// Per refined_landing_page_copy.md "HOW WE'LL WORK TOGETHER" section
// -----------------------------------------------------------------------------
export const howWeWorkSteps = {
  heading: "What starting therapy actually looks like.",
  steps: [
    {
      number: "01",
      title: "A free 15-minute consultation.",
      body: "A low-pressure call to talk about what's bringing you in and see whether we're a good fit. No commitment required.",
    },
    {
      number: "02",
      title: "Getting to know you.",
      body: "In our first few sessions, we'll map what's been going on, what keeps the pattern going, and what you want to be different. You set the pace.",
    },
    {
      number: "03",
      title: "Work that fits your life.",
      body: "Sometimes we'll gently challenge a thought pattern or explore what's underneath a feeling. Other times we'll slow down and work with what's happening in your body. The goal isn't just symptom relief — it's a stronger, more sustainable relationship with yourself.",
    },
  ],
};

// -----------------------------------------------------------------------------
// Our Office
// Heading updated per refined_landing_page_copy.md
// -----------------------------------------------------------------------------
export const ourOffice = {
  heading: "A space that helps you exhale.",
  body: "My Santa Monica office is a quiet, private space with natural light and a comfortable, uncluttered environment. Clients often share that the room itself helps them feel more at ease when they arrive — before we've even started.",
  images: [
    {
      src: "/images/office1.jpeg",
      alt: "Comfortable sofa and seating area in Dr. Reynolds' Santa Monica therapy office with exposed brick and natural light",
    },
    {
      src: "/images/office2.jpeg",
      alt: "Spacious therapy office with sofa, coffee table, and bookshelf",
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
// Specialties — 2×2 grid
// Links updated to real routes
// -----------------------------------------------------------------------------
export const specialties = [
  {
    title: "Anxiety & Panic",
    description:
      "Persistent worry, social anxiety, panic attacks, and the physical tension that doesn't turn off — I work with the full picture of how anxiety shows up in your body and your life.",
    href: "/specialties/anxiety-panic",
  },
  {
    title: "Trauma & Complex PTSD",
    description:
      "Single-incident trauma and long-standing patterns from childhood, relationships, or chronic stress. My approach is paced carefully, with safety and stabilization at the center.",
    href: "/specialties/trauma-complex-ptsd",
  },
  {
    title: "Burnout & High-Achievers",
    description:
      "Entrepreneurs, creatives, and professionals who feel disconnected after years of pushing through. Therapy becomes a space to slow down, reconnect, and build more sustainable ways of living.",
    href: "/specialties/burnout-perfectionism",
  },
  {
    title: "EMDR Therapy",
    description:
      "Eye Movement Desensitization and Reprocessing (EMDR) is an evidence-based method I use to help clients process difficult memories — reducing their emotional intensity and restoring a sense of safety.",
    href: "/specialties/emdr",
  },
];

// -----------------------------------------------------------------------------
// NEW: FAQ Preview — 4 items for homepage
// Per refined_landing_page_copy.md "FAQ PREVIEW" section
// -----------------------------------------------------------------------------
export const faqPreview = {
  heading: "Common questions",
  items: [
    {
      q: "How much do sessions cost, and do you take insurance?",
      a: "I am an out-of-network provider. I can provide a superbill that you may submit to your insurance company for potential reimbursement. I'd recommend calling your insurer to ask about your out-of-network mental health benefits before we begin.",
    },
    {
      q: "How long is a session, and how often will we meet?",
      a: "Sessions are 50 minutes. Most clients begin weekly and adjust as things settle.",
    },
    {
      q: "Should I do in-person or telehealth?",
      a: "Both are effective — it's genuinely a preference. Some clients value the containment of the office; others prefer the convenience of meeting from home. We can decide together on the consultation call.",
    },
    {
      q: "What happens in the first session?",
      a: "Mostly conversation. We'll talk about what brought you in, a bit of history, and what you'd like to be different. There's nothing you need to prepare.",
    },
  ],
  cta: { label: "Read all FAQs →", href: "/faqs" },
};

// -----------------------------------------------------------------------------
// NEW: Testimonial — single anonymized quote
// Per refined_landing_page_copy.md "WHAT CLIENTS SAY" section
// -----------------------------------------------------------------------------
export const testimonial = {
  quote:
    "I came in barely sleeping and running on fumes. A few months in, I recognize myself again.",
  attribution: "Client, 38",
  note: "Shared with permission. Details changed to protect privacy.",
};

// -----------------------------------------------------------------------------
// Book CTA — flanking images + centered text
// -----------------------------------------------------------------------------
export const bookCta = {
  heading: "Ready to feel like yourself again?",
  body: "Coming to therapy is a meaningful decision. I'd love to help you figure out if we're a good fit. Reach out to schedule a free 15-minute consultation call.",
  subtext: "Serving Santa Monica, West LA, and clients across California via telehealth.",
  crisis:
    "If you're in crisis, call or text 988 (Suicide & Crisis Lifeline). This practice is not an emergency service.",
  cta: { label: "Schedule a Consultation", href: "/contact" },
  imageLeft: {
    src: "/images/Gemini_Generated_Image_joirjyjoirjyjoir.png",
    alt: "Calm desk with lavender and garden window view",
  },
  imageRight: {
    src: "/images/Gemini_Generated_Image_7gmc8c7gmc8c7gmc.png",
    alt: "Therapist and client in a calm, supportive therapy session",
  },
};

// -----------------------------------------------------------------------------
// Footer — real routes per maya_content_blueprint.md
// -----------------------------------------------------------------------------
export const footer = {
  tagline:
    "Helping adults in Santa Monica and across California find steady ground — through anxiety, trauma, burnout, and the pressures of a fast-paced life.",
  columns: [
    {
      heading: "Navigate",
      links: [
        { label: "Home", href: "/" },
        { label: "About Dr. Maya", href: "/about" },
        { label: "My Approach", href: "/about/approach" },
        { label: "FAQs", href: "/faqs" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Specialties",
      links: [
        { label: "Anxiety & Panic", href: "/specialties/anxiety-panic" },
        { label: "Trauma & Complex PTSD", href: "/specialties/trauma-complex-ptsd" },
        { label: "Burnout & Perfectionism", href: "/specialties/burnout-perfectionism" },
        { label: "EMDR Therapy", href: "/specialties/emdr" },
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

// =============================================================================
// INNER PAGE CONTENT
// All sourced from maya_content_blueprint.md
// =============================================================================

// -----------------------------------------------------------------------------
// /about — About Dr. Maya Reynolds
// -----------------------------------------------------------------------------
export const aboutPage = {
  eyebrow: "Licensed Clinical Psychologist · Santa Monica, CA",
  heading: "About Dr. Maya Reynolds, PsyD",
  subtext:
    "I'm a licensed clinical psychologist based in Santa Monica, California. My work centers on helping adults — particularly those who are high-achieving, self-aware, and quietly exhausted — find steady ground through anxiety, trauma, and burnout.",
  bio: [
    "Many people I work with are carrying more than they let on. They show up for work, for the people they love, for their responsibilities — but underneath, something feels off. The worry doesn't stop. The tension stays in the body. Sleep is harder than it should be. That's a very reasonable place to reach out.",
    "I earned my doctorate in clinical psychology (PsyD) and am licensed to practice in California. My office is in Santa Monica, and I also work with clients across California via telehealth. I combine practical, evidence-based tools with depth-oriented work — meaning we won't just manage symptoms, we'll explore what's underneath them and build something more sustainable.",
  ],
  credentials: [
    "Dr. Maya Reynolds, PsyD",
    "Licensed Clinical Psychologist — California",
    "123 W 45th St, Santa Monica, CA 90401",
    "In-person sessions · Telehealth across California",
    "hello@mayareynoldspsyd.com | (310) 555-0192",
  ],
  expertiseTags: [
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
  cta: { label: "Schedule a Free Consultation", href: "/contact" },
  ctaSub: "Free 15-minute call · No commitment required",
  image: {
    src: "/images/how_we_work_portrait.png",
    alt: "Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist in Santa Monica, CA",
  },
};

// -----------------------------------------------------------------------------
// /about/approach — My Therapeutic Approach
// -----------------------------------------------------------------------------
export const approachPage = {
  eyebrow: "How I Work",
  heading: "A Personalized, Depth-Oriented Approach to Therapy",
  opening:
    "Therapy works best when clients feel respected, understood, and actively involved in the process. That's not just something I say — it shapes every session. I don't use a one-size-fits-all framework. Instead, I take time to deeply understand what you're carrying and build an approach that actually fits your life.",
  sections: [
    {
      heading: "What sessions look like",
      body: "Sometimes we'll gently challenge a thought pattern or explore what's underneath a feeling. Other times we'll slow down and work with what's happening in your body. Occasionally we'll use structured techniques like EMDR to process specific memories. The pace and direction always follow what you need.\n\nThe goal isn't just symptom relief — it's helping you develop a stronger, more sustainable relationship with yourself. I work with clients who are ready to do real work, and I meet them with equal commitment.",
    },
    {
      heading: "Who I work best with",
      body: "My clients are typically adults who are high-functioning on the outside but internally exhausted. They're often entrepreneurs, creatives, or professionals who have been pushing through for years. Many are self-aware and have even tried therapy before — they're looking for something that goes deeper.\n\nIf you're looking for a therapist who combines practical tools with depth-oriented work, I may be a good fit.",
    },
  ],
  methods: [
    { label: "Cognitive Behavioral Therapy (CBT)", href: "/methods/cognitive-behavioral-therapy" },
    { label: "EMDR (Eye Movement Desensitization & Reprocessing)", href: "/methods/emdr" },
    { label: "Mindfulness-Based Therapy", href: "/methods/mindfulness-based-therapy" },
    { label: "Body-Oriented & Somatic Work", href: "/methods/body-oriented-work" },
  ],
  pullQuote:
    "Therapy works best when clients feel respected, understood, and actively involved in the process.",
  cta: { label: "Schedule a Consultation", href: "/contact" },
};

const anxietyFaqs = [
  {
    question: "How do I know if I need therapy for anxiety or depression?",
    answer: "If your symptoms are interfering with your daily life, relationships, or ability to function, therapy can be highly beneficial. You don't have to wait until things feel unbearable to seek support."
  },
  {
    question: "What if I'm experiencing both anxiety and depression?",
    answer: "It is very common to experience both simultaneously. We will work to address both aspects, understanding how they interact and developing strategies to manage the combined symptoms."
  },
  {
    question: "What about medication? Do I need it?",
    answer: "Medication is a personal choice and can be an effective tool alongside therapy for some individuals. I do not prescribe medication, but I can work collaboratively with a psychiatrist or refer you to one if we determine it might be helpful."
  },
  {
    question: "How long will therapy take?",
    answer: "The length of therapy varies depending on your individual needs and goals. Some clients find significant relief in a few months, while others prefer longer-term support. We will regularly review our progress together."
  }
];

const traumaFaqs = [
  {
    question: "Do I have to talk about my trauma in detail?",
    answer: "No, you do not have to recount every detail of what happened. Especially with approaches like EMDR, we can process traumatic memories without you having to share the explicit details. Your sense of safety is the priority."
  },
  {
    question: "I don't know if what I experienced 'counts' as trauma.",
    answer: "Trauma is not defined by the objective severity of an event, but by how it overwhelmed your nervous system and continues to impact you today. If it affects how you live, it is valid and worth addressing."
  },
  {
    question: "Is it possible to heal from complex or childhood trauma?",
    answer: "Yes. While we cannot erase the past, we can fundamentally change how it lives in your nervous system and how much power it has over your present life and relationships."
  }
];

const burnoutFaqs = [
  {
    question: "I feel like I should be able to handle this. Why can't I?",
    answer: "Burnout isn't a sign of weakness; it's a sign that you have been operating beyond your capacity for too long. Often, the most capable and driven people are the ones who experience the most severe burnout."
  },
  {
    question: "Will therapy make me lose my ambition?",
    answer: "No. Our goal isn't to take away your drive, but to detach your self-worth from your achievements. We want to help you build a sustainable relationship with ambition so you can succeed without sacrificing your well-being."
  },
  {
    question: "What if my job is the problem and I can't leave it?",
    answer: "We will work on what is within your control: setting boundaries, managing your nervous system, and changing how you engage with your work, even if the environment itself is challenging."
  }
];

const emdrFaqs = [
  {
    question: "What does EMDR feel like?",
    answer: "During the processing phases, you remain fully awake and grounded in the present. You might experience intense emotions or physical sensations as memories are processed, but we establish strong coping tools beforehand."
  },
  {
    question: "Does EMDR work virtually?",
    answer: "Yes, EMDR is highly effective via telehealth. We can use self-tapping, specialized software for visual tracking, or auditory tones to facilitate the bilateral stimulation."
  },
  {
    question: "Is EMDR only for PTSD?",
    answer: "While originally developed for PTSD, EMDR is now widely used to treat a range of issues including anxiety, panic attacks, grief, and deeply ingrained negative beliefs about oneself."
  }
];

const sharedSpecialtyFaqs = [
  {
    question: "What is your therapeutic approach?",
    answer: "I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as CBT, EMDR, mindfulness, and body-oriented techniques."
  },
  {
    question: "What specialties do you focus on?",
    answer: "My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling 'functional' on the outside while quietly struggling with constant worry, tension, difficulty sleeping, or the lingering impact of past experiences."
  },
  {
    question: "Do you offer telehealth or in-person sessions?",
    answer: "Yes, I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located anywhere in California."
  },
  {
    question: "Who is a good fit for your practice?",
    answer: "Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge. I frequently support entrepreneurs, creatives, and professionals dealing with burnout and high internal pressure."
  }
];

// -----------------------------------------------------------------------------
// Specialty pages — /specialties/*
// -----------------------------------------------------------------------------
export const specialtyPages = {
  "anxiety-panic": {
    eyebrow: "Anxiety Therapy · Santa Monica, CA",
    heading: "Anxiety & Panic Therapy in\nSanta Monica, CA",
    subtext:
      "Racing thoughts, persistent worry, panic attacks, and the tension that never turns off — I work with adults in Santa Monica and across California who are living with anxiety in all its forms.",
    sections: [
      {
        heading: "What anxiety can feel like",
        body: "Anxiety doesn't always look like panic. For many of my clients, it shows up as a constant low hum of worry that makes it hard to relax, sleep, or be present. It might look like overthinking every decision, feeling on edge even when nothing is obviously wrong, or bracing for the next hard thing before it arrives.\n\nFor others, anxiety is more acute — panic attacks, social anxiety, or physical symptoms like a racing heart, chest tightness, or shallow breathing.",
        sideText: "You're tired of feeling like this—caught between overwhelming anxiety and the heavy blanket of depression."
      },
      {
        heading: "How I can help",
        body: "I work with the full picture of how anxiety shows up in your body and your life — not just the thoughts, but the physiological patterns underneath them. We'll build practical tools to interrupt the anxiety cycle while also exploring what's driving it at a deeper level.\n\nMy approach draws on Cognitive Behavioral Therapy (CBT), Mindfulness-Based techniques, and when appropriate, body-oriented methods that help regulate the nervous system directly.",
      },
    ],
    helpList: {
      heading: "Therapy for anxiety and\ndepression can help you...",
      items: [
        "FIND PEACE IN YOUR DAILY LIFE",
        "DEVELOP EFFECTIVE COPING STRATEGIES",
        "RECONNECT WITH JOY AND PURPOSE",
        "BUILD CONFIDENCE AND SELF-COMPASSION"
      ],
      body: "As you learn to understand and manage your anxiety and depression, you'll discover that a different way of living is possible. This is your chance to move from surviving to truly thriving."
    },
    whoThisIsFor: [
      "Adults experiencing generalized anxiety or constant worry",
      "People dealing with panic attacks or panic disorder",
      "High-achievers who feel \"on\" all the time and can't switch off",
      "Anyone with social anxiety or performance anxiety",
      "People whose anxiety shows up in the body (tension, insomnia, physical symptoms)",
    ],
    faqs: anxietyFaqs,
    ctaHeading: "You don't have to face this alone.",
    ctaSubtext: "",
    ctaButton: "BOOK NOW",
    ctaFootnote: "",
    ctaBackgroundImage: "/cta-beach-2.png",
  },
  "trauma-complex-ptsd": {
    eyebrow: "Trauma Therapy · Santa Monica, CA",
    heading: "Trauma & Complex PTSD Therapy in\n Santa Monica, CA",
    subtext:
      "Whether it's a single event or years of accumulated stress, trauma shapes the way you see yourself, others, and the world. Healing is possible — and it doesn't have to mean reliving the past.",
    sections: [
      {
        heading: "What trauma can look like",
        body: "Trauma isn't only about a single dramatic event. Many of my clients carry what's called complex or relational trauma — long-standing patterns from childhood, difficult relationships, or chronic stress that accumulated quietly over years.\n\nThe effects can show up as hypervigilance, emotional numbness, difficulty trusting others, intrusive memories, or a persistent sense that something is off — even if life looks fine from the outside.",
      },
      {
        heading: "My approach to trauma",
        body: "I use EMDR (Eye Movement Desensitization and Reprocessing) alongside other evidence-based approaches to help clients process the past without being consumed by it. We don't rush. Safety and stabilization come first — always.\n\nMy approach is paced carefully, with your window of tolerance in mind at every stage. The goal is not to erase the past, but to reduce its hold on your present.",
      },
    ],
    helpList: {
      heading: "Therapy for trauma can\nhelp you...",
      items: [
        "REGAIN A SENSE OF SAFETY IN YOUR BODY",
        "REDUCE THE INTENSITY OF TRIGGERS",
        "BUILD TRUST IN YOURSELF AND OTHERS",
        "RECONNECT WITH THE PRESENT MOMENT"
      ],
      body: "Healing from trauma isn't about forgetting what happened; it's about untangling the past from the present. As you process these experiences, you'll find more space to live, connect, and breathe freely."
    },
    whoThisIsFor: [
      "Adults with PTSD or Complex PTSD (C-PTSD)",
      "People processing childhood trauma or relational wounding",
      "Those who've experienced a single traumatic event (accident, loss, assault)",
      "High-achievers whose past quietly shapes how they perform and relate",
      "Anyone who feels stuck in patterns they don't fully understand",
    ],
    faqs: traumaFaqs,
    ctaHeading: "You don't have to carry this alone.",
    ctaSubtext: "",
    ctaButton: "BEGIN HEALING",
    ctaFootnote: "",
    ctaBackgroundImage: "/cta-trauma.png",
  },
  "burnout-perfectionism": {
    eyebrow: "Burnout Therapy · Santa Monica, CA",
    heading: "Burnout Therapy for High-Achievers in\n Santa Monica, CA",
    subtext:
      "High-achieving doesn't always mean feeling okay. If you've been pushing through for years and feel disconnected from yourself, therapy can help you slow down, reconnect, and build a more sustainable life.",
    sections: [
      {
        heading: "What burnout actually looks like",
        body: "Burnout is more than being tired. It's the sense of emptiness that comes after years of striving — when the things that used to motivate you no longer land, when you feel like you're going through the motions, when success doesn't feel like enough anymore.\n\nMany of my clients are entrepreneurs, creatives, or professionals. They've built something. They're competent. But they feel profoundly disconnected from themselves and aren't sure when that happened.",
      },
      {
        heading: "What perfectionism has to do with it",
        body: "Perfectionism and burnout often travel together. The same drive that makes someone effective can, over time, become the thing that depletes them. Constantly raising the bar, difficulty delegating, harsh self-criticism after mistakes — these patterns exhaust people quietly, over years.\n\nIn therapy, we'll explore where these patterns came from and how to build a healthier relationship with ambition, achievement, and yourself.",
      },
    ],
    helpList: {
      heading: "Therapy for burnout can\nhelp you...",
      items: [
        "RECONNECT WITH YOUR SENSE OF PURPOSE",
        "SET BOUNDARIES WITHOUT GUILT",
        "DETACH SELF-WORTH FROM ACHIEVEMENT",
        "RECOVER YOUR ENERGY AND JOY"
      ],
      body: "Overcoming burnout requires more than just a vacation. It involves shifting the fundamental ways you engage with your work, relationships, and yourself, paving the way for a more sustainable life."
    },
    whoThisIsFor: [
      "Entrepreneurs, creatives, and professionals who feel depleted",
      "People who've lost motivation despite outward success",
      "High-achievers struggling with harsh self-criticism or perfectionism",
      "Anyone who feels disconnected from themselves after years of pushing through",
      "Those who know something needs to change but don't know where to start",
    ],
    faqs: burnoutFaqs,
    ctaHeading: "You've taken care of everything. Now it's your turn.",
    ctaSubtext: "",
    ctaButton: "FIND BALANCE",
    ctaFootnote: "",
    ctaBackgroundImage: "/cta-burnout.png",
  },
  emdr: {
    eyebrow: "EMDR Therapy · Santa Monica, CA",
    heading: "EMDR Therapy in\n Santa Monica, CA",
    subtext:
      "EMDR is one of the most well-researched therapies for trauma. I use it to help clients process difficult memories — reducing their emotional intensity and restoring a sense of safety.",
    sections: [
      {
        heading: "What is EMDR?",
        body: "Eye Movement Desensitization and Reprocessing (EMDR) is an evidence-based therapeutic approach originally developed to treat PTSD. It works by helping the brain reprocess traumatic or distressing memories so they lose their emotional charge.\n\nDuring EMDR, we'll work with bilateral stimulation — often eye movements or tapping — while gently bringing a memory or feeling into awareness. Over time, this allows the brain to \"digest\" what it couldn't fully process at the time of the original experience.",
      },
      {
        heading: "Who benefits from EMDR",
        body: "EMDR is particularly effective for people with PTSD or complex trauma, those with anxiety linked to specific past events, adults whose trauma symptoms haven't responded to talk therapy alone, and anyone who feels \"stuck\" in a pattern despite insight and effort.\n\nLearn more about how EMDR works as a method →",
      },
    ],
    helpList: {
      heading: "EMDR therapy can\nhelp you...",
      items: [
        "PROCESS TRAUMA WITHOUT RELIVING IT",
        "REDUCE PHYSICAL AND EMOTIONAL TRIGGERS",
        "SHIFT NEGATIVE CORE BELIEFS",
        "FEEL GROUNDED IN THE PRESENT"
      ],
      body: "By allowing your brain's natural healing processes to take over, EMDR helps you move past the stuck points that talk therapy alone might not reach, giving you the freedom to move forward."
    },
    whoThisIsFor: [
      "People with PTSD or complex trauma",
      "Those with anxiety linked to specific past events",
      "Adults whose trauma symptoms haven't responded to talk therapy alone",
      "Anyone who feels \"stuck\" in a pattern despite insight and effort",
    ],
    faqs: emdrFaqs,
    ctaHeading: "Ready to explore EMDR?",
    ctaSubtext: "",
    ctaButton: "START EMDR",
    ctaFootnote: "",
    ctaBackgroundImage: "/cta-transitions.png",
  },
};

// -----------------------------------------------------------------------------
// Method pages — /methods/*
// -----------------------------------------------------------------------------
export const methodPages = {
  "cognitive-behavioral-therapy": {
    eyebrow: "Therapeutic Methods",
    heading: "Cognitive Behavioral Therapy (CBT) in\nSanta Monica",
    subtext:
      "CBT is one of the most extensively studied approaches in psychotherapy. I use it to help clients identify and shift the thought patterns that fuel anxiety, depression, and perfectionism.",
    sections: [
      {
        heading: "What is CBT?",
        body: "Cognitive Behavioral Therapy is based on the connection between thoughts, feelings, and behaviors. When we're struggling, our thinking often becomes distorted in ways we don't fully notice — catastrophizing, all-or-nothing thinking, self-criticism.\n\nCBT gives us tools to recognize those patterns, test them against reality, and gradually shift them. It's practical and structured, with skills you can use between sessions.",
      },
      {
        heading: "How I use it",
        body: "I don't use CBT as a rigid protocol. Instead, I draw on its core principles — challenging unhelpful thoughts, building behavioral patterns that support wellbeing — within a broader approach that also pays attention to underlying emotional experiences and body-level patterns.\n\nIt works particularly well for anxiety, perfectionism, and burnout.",
      },
    ],
    ctaHeading: "Ready to work on the patterns holding you back?",
    ctaSubtext: "Schedule a free 15-minute consultation to get started.",
    ctaButton: "Schedule a Consultation",
    ctaFootnote: "Serving Santa Monica, West LA, and clients across California via telehealth",
  },
  emdr: {
    eyebrow: "Therapeutic Methods",
    heading: "EMDR Therapy —\nHow It Works",
    subtext:
      "EMDR stands for Eye Movement Desensitization and Reprocessing. It's one of the most well-researched approaches for trauma and is recommended by the WHO, the APA, and the US Department of Veterans Affairs.",
    sections: [
      {
        heading: "How EMDR works",
        body: "When something traumatic or deeply distressing happens, the brain sometimes can't fully process it. The memory gets \"stuck\" — remaining highly emotional and reactive, as if the event is still happening.\n\nEMDR helps the brain complete that processing. Using bilateral stimulation (eye movements, tapping, or sound), we gently activate the brain's natural processing system while keeping one foot in the present. Over the course of sessions, the memory's emotional intensity decreases — it becomes a past event rather than a present threat.",
      },
      {
        heading: "What an EMDR session looks like with me",
        body: "Before any EMDR processing begins, we spend time building trust, safety, and stabilization skills. Nothing moves faster than you're ready for.\n\nSessions are 50–90 minutes. We'll identify the memory or belief we're working with, establish the bilateral stimulation, and process together. Many clients describe feeling lighter, less reactive, or more present after sessions — though the work unfolds at its own pace.",
      },
    ],
    ctaHeading: "Curious about EMDR?",
    ctaSubtext: "Schedule a free consultation to ask questions and see if it's right for you.",
    ctaButton: "Schedule a Free Consultation",
    ctaFootnote: "Serving Santa Monica, West LA, and clients across California via telehealth",
  },
  "mindfulness-based-therapy": {
    eyebrow: "Therapeutic Methods",
    heading: "Mindfulness-Based Therapy in\nSanta Monica, CA",
    subtext:
      "Mindfulness isn't about clearing your mind. It's about learning to be present with what's actually there — and developing a different relationship with your thoughts and feelings.",
    sections: [
      {
        heading: "How I use mindfulness",
        body: "I draw on Mindfulness-Based Cognitive Therapy (MBCT) and general mindfulness practices to help clients develop awareness of their inner experience without being swept away by it.\n\nThis is especially useful for anxiety (where the mind races ahead) and for burnout (where people have lost touch with themselves entirely). We build the capacity to notice what's happening — in the mind and the body — and respond rather than react.",
      },
      {
        heading: "What this looks like in practice",
        body: "Mindfulness work in our sessions might look like noticing a thought without immediately acting on it, observing a physical sensation with curiosity rather than fear, or simply pausing before responding to a difficult situation.\n\nOver time, clients report feeling less swept away by their internal experience — and more grounded in the present.",
      },
    ],
    ctaHeading: "Ready to build a more grounded relationship with yourself?",
    ctaSubtext: "Schedule a free 15-minute consultation to get started.",
    ctaButton: "Schedule a Consultation",
    ctaFootnote: "Serving Santa Monica, West LA, and clients across California via telehealth",
  },
  "body-oriented-work": {
    eyebrow: "Therapeutic Methods",
    heading: "Body-Oriented & Somatic Therapy in\nSanta Monica",
    subtext:
      "Trauma and anxiety live in the body, not just the mind. Body-oriented approaches help clients work with what's happening in their nervous system — not only their thoughts.",
    sections: [
      {
        heading: "What body-oriented work is",
        body: "Body-oriented or somatic therapy recognizes that distress isn't only stored in the mind — it's held in the body. You might notice it as chronic tension, a tight chest, a constricted throat, or a persistent sense of unease that doesn't have a clear explanation.\n\nBy paying attention to physical sensation alongside thoughts and emotions, we can access layers of experience that traditional talk therapy sometimes misses.",
      },
      {
        heading: "Who this is particularly relevant for",
        body: "This approach is particularly relevant for trauma survivors, people with anxiety that lives in the body, and those who feel \"stuck\" despite having a lot of intellectual insight.\n\nIf you've been in talk therapy before and feel like something is still missing — like understanding the problem isn't quite translating into change — body-oriented work may be what's needed.",
      },
    ],
    ctaHeading: "Ready to work with the full picture?",
    ctaSubtext: "Schedule a free 15-minute consultation to get started.",
    ctaButton: "Schedule a Consultation",
    ctaFootnote: "Serving Santa Monica, West LA, and clients across California via telehealth",
  },
};

// -----------------------------------------------------------------------------
// /faqs — Full FAQ list
// -----------------------------------------------------------------------------
export const allFaqs = {
  heading: "Frequently Asked Questions",
  subtext:
    "Have a question about working together? You'll find answers to the most common ones below. If you don't see what you're looking for, feel free to reach out directly.",
  items: [
    {
      q: "Do you offer a free consultation?",
      a: "Yes. I offer a free 15-minute phone consultation so we can talk briefly about what you're looking for and whether working together seems like a good fit. There's no commitment involved.",
    },
    {
      q: "What does the first session look like?",
      a: "The first session is a chance for us to get to know each other. I'll ask about what's bringing you in, your background, and what you're hoping to change. It's also an opportunity for you to ask me questions and get a feel for how I work. There's no pressure to share more than you're ready to.",
    },
    {
      q: "How long does therapy take?",
      a: "It depends on what we're working on. Some clients come for a focused period of several months; others choose to work together longer-term. We'll check in regularly on progress and adjust as things evolve. I don't believe in keeping clients in therapy longer than they need to be.",
    },
    {
      q: "Do you accept insurance?",
      a: "I am an out-of-network provider. I can provide a superbill (a detailed receipt) that you may submit to your insurance company for potential reimbursement, depending on your out-of-network benefits. I'd recommend calling your insurance provider to ask about your out-of-network mental health coverage before we begin.",
    },
    {
      q: "Do you offer telehealth sessions?",
      a: "Yes. I offer in-person sessions at my Santa Monica office and telehealth sessions for clients anywhere in California. Many clients find telehealth works just as well — and sometimes better — than in-person for their schedule and comfort.",
    },
    {
      q: "What is your cancellation policy?",
      a: "I ask for at least 24 hours' notice for cancellations or rescheduling. Late cancellations or no-shows may be charged the full session fee.",
    },
    {
      q: "How do I know if therapy is right for me?",
      a: "If you're wondering whether something could be better — whether you could feel less anxious, more present, or more like yourself — that's usually enough reason to reach out. You don't need to be in crisis to benefit from therapy. The free 15-minute consultation is a low-stakes way to explore it.",
    },
    {
      q: "What is a Good Faith Estimate?",
      a: "Under the No Surprises Act, healthcare providers are required to give clients who don't have insurance (or who are not using insurance) a Good Faith Estimate of expected costs. You can request this before beginning services. Please reach out if you'd like more details.",
    },
  ],
  ctaHeading: "Still have questions?",
  ctaSubtext:
    "I'm happy to answer before we get started. Reach out by email or schedule a free call.",
  ctaButton: "Get in Touch",
};

// -----------------------------------------------------------------------------
// /contact — Contact & Schedule
// -----------------------------------------------------------------------------
export const contactPage = {
  eyebrow: "Get in Touch",
  heading: "Schedule a Consultation with Dr. Maya Reynolds",
  subtext:
    "Coming to therapy is a meaningful decision. Start with a free 15-minute call — no commitment, just a conversation about what you're looking for and whether working together makes sense.",
  details: [
    { label: "Office", value: "123 W 45th St, Santa Monica, CA 90401" },
    { label: "Email", value: "hello@mayareynoldspsyd.com" },
    { label: "Phone", value: "(310) 555-0192" },
    { label: "Sessions", value: "In-person (Santa Monica) · Telehealth (all of California)" },
    { label: "Consultation", value: "Free 15-minute phone call · No commitment" },
  ],
  steps: [
    {
      number: "1",
      heading: "Reach out",
      body: "Send a message or call to introduce yourself and what you're looking for.",
    },
    {
      number: "2",
      heading: "Free 15-min call",
      body: "We'll talk briefly and see if working together feels like a good fit.",
    },
    {
      number: "3",
      heading: "Book your first session",
      body: "If it feels right, we'll schedule your first full session.",
    },
  ],
  serviceArea:
    "Serving Santa Monica, West LA, Brentwood, Malibu, and clients across California via telehealth.",
  cta: { label: "Schedule a Free Consultation", href: "#" },
};
