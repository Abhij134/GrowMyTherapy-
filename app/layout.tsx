import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish, Alex_Brush } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  variable: "--font-alex-brush",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist in Santa Monica, CA",
  description:
    "Dr. Maya Reynolds is a licensed clinical psychologist in Santa Monica, CA specializing in anxiety, trauma, EMDR, and burnout. In-person and telehealth sessions available across California.",
  keywords: [
    "therapist Santa Monica",
    "licensed clinical psychologist Santa Monica",
    "anxiety therapy Santa Monica",
    "EMDR therapist Los Angeles",
    "trauma therapy Santa Monica",
    "burnout therapy West LA",
    "online therapy California",
  ],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Santa Monica Clinical Psychologist",
    description:
      "Therapy for anxiety, trauma, and burnout in Santa Monica and across California via telehealth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${mulish.variable} ${alexBrush.variable}`}>
      <body className="font-sans antialiased bg-secondary text-ink overflow-x-hidden w-full">
        {children}
      </body>
    </html>
  );
}
