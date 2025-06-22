import type { Metadata } from 'next';
import './globals.css';
import { Ubuntu } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu'
});

export const metadata: Metadata = {
  title: 'Ahmed Elseginy | Software Developer',
  description: 'Portfolio of Ahmed Elseginy, a passionate software developer specializing in creating modern web applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${ubuntu.variable} font-body antialiased`}>
          {children}
          <Toaster />
      </body>
    </html>
  );
}
