import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Satoshi } from "@/lib/font";
export const metadata: Metadata = {
  title: "Kreasi Advertising | Jasa Iklan & Promosi Terbaik",
  description:
    "Butuh tempat periklanan di Bukittinggi? Kami menyediakan layanan iklan outdoor, billboard, spanduk, dan media promosi lainnya untuk bisnis Anda. Jangkau lebih banyak pelanggan dengan iklan yang efektif.",
  keywords: [
    "tempat periklanan di Bukittinggi",
    "jasa iklan Bukittinggi",
    "billboard Bukittinggi",
    "spanduk Bukittinggi",
    "jasa promosi Bukittinggi",
    "advertising Bukittinggi",
    "periklanan Sumatera Barat",
  ],
  openGraph: {
    title: "Tempat Periklanan di Bukittinggi",
    description:
      "Solusi periklanan terbaik di Bukittinggi: billboard, spanduk, dan media promosi untuk meningkatkan brand awareness bisnis Anda.",
    url: "https://namadomain.com",
    siteName: "Nama Perusahaan Iklan Bukittinggi",
    images: [
      {
        url: "https://namadomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tempat Periklanan di Bukittinggi",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "https://namadomain.com",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Satoshi.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
