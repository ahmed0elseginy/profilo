import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Orbitron, Share_Tech_Mono, Inter, DM_Mono } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-orbitron',
  display: 'swap',
  preload: true,
});

const shareTechMono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-sharetech',
  display: 'swap',
  preload: true,
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-mono',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Ahmed Elseginy | Software Developer',
  description: 'Portfolio of Ahmed Elseginy, a passionate software developer specializing in creating modern web applications.',
  robots: 'index, follow',
  authors: [{ name: 'Ahmed Elseginy' }],
  keywords: ['Ahmed Elseginy', 'Software Developer', 'Backend Developer', 'Portfolio'],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.variable} ${dmMono.variable} ${orbitron.variable} ${shareTechMono.variable} font-sans text-gray-700 dark:text-gray-200 relative antialiased`}> 
          {children}
          <Toaster />
      </body>
    </html>
  );
}
