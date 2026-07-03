import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laura Cimpoesu | AI Solutions Architect & Software Engineer",
  description: "Software Engineer & AI Consultant with 7+ years of experience in fullstack development, blockchain, and AI. Building exceptional digital experiences for companies worldwide.",
  keywords: [
    "AI Consultant",
    "Software Engineer",
    "Full Stack Developer",
    "Blockchain Developer",
    "Web3",
    "React",
    "Next.js",
    "AI Solutions",
    "LangChain",
    "OpenAI",
    "Laura Cimpoesu",
  ],
  authors: [{ name: "Laura Cimpoesu" }],
  creator: "Laura Cimpoesu",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Laura Cimpoesu | AI Solutions Architect & Software Engineer",
    description: "Software Engineer & AI Consultant with 7+ years of experience building exceptional digital experiences.",
    siteName: "Laura Cimpoesu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laura Cimpoesu | AI Solutions Architect",
    description: "Software Engineer & AI Consultant with 7+ years of experience.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      style={{ colorScheme: 'dark' }}
    >
      <body className="min-h-screen bg-[#030014] text-white">
        {children}
      </body>
    </html>
  );
}
