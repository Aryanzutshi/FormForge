import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "FormForge - Your Personal AI Fitness Trainer",
    template: "%s | FormForge"
  },
  description: "Transform your fitness journey with FormForge - the ultimate AI-powered personal trainer. Get personalized workouts, nutrition tracking, progress monitoring, and virtual coaching. Coming soon!",
  keywords: [
    "AI fitness trainer",
    "personal trainer",
    "workout app",
    "fitness tracking",
    "nutrition planning",
    "virtual coaching",
    "exercise library",
    "fitness goals",
    "health app",
    "FormForge"
  ],
  authors: [{ name: "FormForge Team" }],
  creator: "FormForge",
  publisher: "FormForge",
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
    type: "website",
    locale: "en_US",
    url: "https://formforge-sooty.vercel.app/",
    siteName: "FormForge",
    title: "FormForge - Your Personal AI Fitness Trainer",
    description: "Transform your fitness journey with AI-powered personal training, nutrition tracking, and virtual coaching. Coming soon!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FormForge - AI Fitness Trainer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FormForge - Your Personal AI Fitness Trainer",
    description: "Transform your fitness journey with AI-powered personal training, nutrition tracking, and virtual coaching. Coming soon!",
    images: ["/og-image.jpg"],
    creator: "@formforge",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "fitness",
  classification: "Health & Fitness",
  alternates: {
    canonical: "https://formforge-sooty.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="dark bg-black min-h-screen">
          <main role="main" id="main-content">
            {children}
          </main>
        </div>

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "FormForge",
              "description": "AI-powered personal fitness trainer with personalized workouts, nutrition tracking, and virtual coaching",
              "url": "https://formforge-sooty.vercel.app/",
              "applicationCategory": "HealthApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Organization",
                "name": "FormForge Team"
              },
              "publisher": {
                "@type": "Organization",
                "name": "FormForge"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
