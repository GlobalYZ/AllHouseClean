import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "AllHouseClean",
  description: "Cleaning Service provider in Edmonton",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <title>AllHouseClean</title>
        <meta
          name="description"
          content="A cleaning service provider in Edmonton"
        />
        <meta name="keywords" content="cleaning service, Edmonton" />
        <meta name="author" content="AllHouseClean" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="AllHouseClean" />
        <meta
          property="og:description"
          content="A cleaning service provider in Edmonton"
        />
        {/* <meta
          property="og:image"
          content="https://yourwebsite.com/og-image.jpg"
        /> */}
        {/* <meta property="og:url" content="https://yourwebsite.com" /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Miya's Portfolio" />
        <meta
          name="twitter:description"
          content="Miya is a software developer specializing in Web | Mobile | Front End Development"
        />
        {/* <meta
          name="twitter:image"
          content="https://yourwebsite.com/twitter-image.jpg"
        /> */}

        <link rel="icon" href="/LogoIcon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/LogoIcon.svg" />

        {/* <link rel="canonical" href="https://yourwebsite.com" /> */}
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-white text-primary antialiased font-sans"
        )}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
