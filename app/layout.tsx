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
  metadataBase: new URL("https://thehiringrebels.com"),
  applicationName: "The Hiring Rebels",
  title: "The Hiring Rebels | IT Recruitment, Executive Search & Global Hiring",
  description:
    "The Hiring Rebels is a premium recruitment agency helping startups, technology companies, and growing businesses hire exceptional talent through IT recruitment, executive search, global hiring, and AI-powered candidate sourcing.",
  keywords: [
    "Recruitment Agency",
    "IT Recruitment",
    "Executive Search",
    "Global Hiring",
    "Talent Acquisition",
    "AI Recruiting",
    "Tech Hiring",
    "Leadership Hiring",
  ],
  authors: [{ name: "The Hiring Rebels" }],
  creator: "The Hiring Rebels",
  publisher: "The Hiring Rebels",
  category: "Business",
  alternates: {
    canonical: "https://thehiringrebels.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "The Hiring Rebels | Premium Recruitment Partner",
    description:
      "Helping companies hire exceptional talent through strategic recruitment, executive search, and AI-powered sourcing.",
    url: "https://thehiringrebels.com",
    siteName: "The Hiring Rebels",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Hiring Rebels | Premium Recruitment Partner",
    description:
      "Helping companies hire exceptional talent through strategic recruitment, executive search, and AI-powered sourcing.",
  },
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
