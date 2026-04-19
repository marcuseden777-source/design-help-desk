import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design Help Desk | Premium Interior Design Intelligence",
  description: "Experience the future of interior design with our AI-driven Reasoning Engine. Knowledge-as-a-Service for sophisticated homeowners and designers.",
  keywords: "Interior Design, AI, Design Assistant, Luxury Homes, Design Help Desk, Singapore Design",
  openGraph: {
    title: "Design Help Desk | Premium Interior Design Intelligence",
    description: "Experience the future of interior design with our AI-driven Reasoning Engine.",
    type: "website",
    locale: "en_SG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <main>{children}</main>
        
        {/* Cinematic Background Elements */}
        <div className="bg-elements">
          <div className="orb blue-orb"></div>
          <div className="orb purple-orb"></div>
          <div className="mesh-gradient"></div>
        </div>
      </body>
    </html>
  );
}
