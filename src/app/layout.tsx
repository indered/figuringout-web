import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Figuring Out — At least we figured out the hydration.",
  description:
    "In a world where everyone is figuring out, at least we figured out the hydration. India's first electrolyte for everyone running through life.",
  keywords: ["electrolyte", "India", "run club", "hydration", "figuring out", "tropical", "running"],
  openGraph: {
    title: "Figuring Out",
    description: "In a world where everyone is figuring out, at least we figured out the hydration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen" style={{ backgroundColor: '#FDF8F3', color: '#1A1A1A' }}>
        {children}
      </body>
    </html>
  );
}
