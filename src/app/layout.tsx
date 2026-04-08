import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Innovative Greenhouse Projects (IGPL) | Advanced Greenhouse EPC",
  description: "Innovative Greenhouse Projects (IGPL) provides end-to-end Polyhouse & Greenhouse EPC services optimized via the Sustainability Conversion Model (SCM).",
  icons: {
    icon: "/favicon.ico",
  },
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
