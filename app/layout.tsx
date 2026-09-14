import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
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
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-secondary text-ink">{children}</body>
    </html>
  );
}
