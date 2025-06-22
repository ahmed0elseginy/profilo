import type { Metadata } from 'next';
import './globals.css';
import { Ubuntu } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import { PERSONAL_INFO } from '@/lib/constants';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
  display: 'swap', // Improves font loading performance
  preload: true,
});

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.NAME} | ${PERSONAL_INFO.TITLE}`,
  description: `Portfolio of ${PERSONAL_INFO.NAME}, a passionate software developer specializing in creating modern web applications and backend systems.`,
  keywords: [
    'Ahmed El-Seginy',
    'Software Developer',
    'Backend Developer',
    'Java',
    'Spring Boot',
    'Portfolio',
    'Egypt',
    'Giza'
  ],
  authors: [{ name: PERSONAL_INFO.NAME }],
  creator: PERSONAL_INFO.NAME,
  publisher: PERSONAL_INFO.NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ahmed-elseginy.vercel.app'), // Update with your actual domain
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  themeColor: '#1e1b4b',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ahmed-elseginy.vercel.app', // Update with your actual domain
    title: `${PERSONAL_INFO.NAME} | ${PERSONAL_INFO.TITLE}`,
    description: `Portfolio of ${PERSONAL_INFO.NAME}, a passionate software developer specializing in creating modern web applications and backend systems.`,
    siteName: `${PERSONAL_INFO.NAME} Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL_INFO.NAME} | ${PERSONAL_INFO.TITLE}`,
    description: `Portfolio of ${PERSONAL_INFO.NAME}, a passionate software developer.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification IDs here
    // google: 'your-google-verification-id',
    // yandex: 'your-yandex-verification-id',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Performance hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body 
        className={`${ubuntu.variable} font-body antialiased min-h-screen`}
        suppressHydrationWarning
      >
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">
            {children}
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
