import Script from "next/script";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Renoweb Digital Solutions",
  description: "Don't Rent an Audience. Build Your Empire!",
  openGraph: {
    title: "Renoweb Digital Solutions",
    description: "Don't Rent an Audience. Build Your Empire! ",
    url: 'https://renowebhq.com',
    siteName: 'Renoweb Digital Solutions',
    images: [
      {
        url: '/renoweb_logo.jpg', // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: 'Renoweb - Build Your Empire',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RB16SCJGYD"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RB16SCJGYD');
        `}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
