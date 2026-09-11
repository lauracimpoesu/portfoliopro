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
  title: "Laura Cimpoesu | Senior Software Engineer & AI Product Engineer",
  description: "Senior Software Engineer with 7+ years of experience specializing in React, Next.js, and TypeScript. Building production-ready web applications and AI-powered products for international startups and technology companies.",
  keywords: [
    "Senior Software Engineer",
    "Senior Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "AI Product Engineer",
    "AI Software Engineer",
    "Freelance Software Engineer",
    "Fractional Engineer",
    "Web3 Developer",
    "Blockchain Developer",
    "Laura Cimpoesu",
  ],
  authors: [{ name: "Laura Cimpoesu" }],
  creator: "Laura Cimpoesu",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Laura Cimpoesu | Senior Software Engineer & AI Product Engineer",
    description: "Senior Software Engineer specializing in React, Next.js, and AI product development. 7+ years building production-ready applications for international clients.",
    siteName: "Laura Cimpoesu",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laura Cimpoesu | Senior Software Engineer",
    description: "Senior Software Engineer specializing in React, Next.js, and AI product development. 7+ years experience.",
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
