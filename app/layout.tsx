import type { Metadata } from "next";
import { Archivo, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Aaliyan Mansoor — Engineer · Researcher · Writer",
  description:
    "Computer Systems Engineer, full-stack developer, and published AI/Vision researcher. From FPGA-deployed machine vision to high-conversion web platforms and publication-ready writing.",
  keywords: [
    "Aaliyan Mansoor",
    "Computer Systems Engineer",
    "Computer Vision",
    "FPGA",
    "YOLO",
    "React Developer",
    "Technical Writer",
    "Karachi",
  ],
  authors: [{ name: "Aaliyan Mansoor" }],
  openGraph: {
    title: "Aaliyan Mansoor — Engineer · Researcher · Writer",
    description:
      "From silicon to story: edge AI research, full-stack platforms, and published writing.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${grotesk.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="grain min-h-full bg-bg text-ink">{children}</body>
    </html>
  );
}
