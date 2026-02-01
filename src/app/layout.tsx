import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sanur Indah Travel | Ibadah Mudah Sesuai Syariah",
  description: "Premium travel experiences tailored for you. Book your next adventure with Sanur Indah Travel today.",
  keywords: ["travel", "agency", "umrah", "haji", "Sanur Indah Travel"],
  authors: [{ name: "Sanur Indah Travel" }],
  icons: {
    icon: '/favicon-custom.png',
  },
  openGraph: {
    title: "Sanur Indah Travel",
    description: "Premium travel experiences tailored for you.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} ${outfit.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
