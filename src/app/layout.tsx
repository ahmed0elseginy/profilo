import type { Metadata } from 'next';
import './globals.css';
import { Ubuntu } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Ahmed Elseginy | Software Developer',
  description: 'Portfolio of Ahmed Elseginy, a passionate software developer specializing in creating modern web applications.',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  authors: [{ name: 'Ahmed Elseginy' }],
  keywords: ['Ahmed Elseginy', 'Software Developer', 'Backend Developer', 'Portfolio'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${ubuntu.variable} font-body antialiased`}>
          {children}
          <Toaster />
      </body>
    </html>
  );
}
