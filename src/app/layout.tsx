import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIChefMate - AI-Powered Meal Planning",
  description: "Elevate Your Mealtime with AI-Powered Personalization. Effortless Planning, Healthier Eating.",
  keywords: "AI meal planning, recipe suggestions, healthy eating, meal prep, nutrition",
  authors: [{ name: "AIChefMate Team" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased overflow-x-hidden">
        <div className="min-h-screen w-full max-w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
