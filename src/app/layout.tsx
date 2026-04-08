import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Innovative Greenhouse Projects (IGPL)",
  description: "End-to-End Polyhouse & Greenhouse EPC - Built on the Sustainability Conversion Model (SCM).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
