import type { Metadata } from 'next';
import './globals.css';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: 'Ahmed Elseginy | Full-Stack Developer',
  description: 'Portfolio of Ahmed Elseginy, a passionate full-stack developer specializing in creating modern web applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-body antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="floating-gradient">
            <div className="gradient-circle" />
          </div>
          <div className="relative z-10 md:px-20 lg:px-20 px-9 overflow-x-hidden">
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
