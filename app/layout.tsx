import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navigation from '@/components/Navigation';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Rajan K K Woodcraft - Master Craftsman | Koyilandy, Kerala',
  description: 'Experience 40 years of master woodworking craftsmanship by Rajan K K in Koyilandy, Kerala. Custom furniture, traditional woodwork, and premium wooden items.',
  keywords: 'woodwork, furniture, Kerala, Koyilandy, craftsman, custom furniture, wooden items',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-inter overflow-x-hidden">
        <div className="forest-background fixed inset-0 z-0">
          <div className="forest-layer-1 absolute inset-0 opacity-90"></div>
          <div className="forest-layer-2 absolute inset-0 opacity-70"></div>
          <div className="forest-layer-3 absolute inset-0 opacity-50"></div>
          <div className="forest-layer-4 absolute inset-0 opacity-40"></div>
          <div className="forest-overlay absolute inset-0"></div>
        </div>
        <div className="forest-particles fixed inset-0 z-1 pointer-events-none">
          <div className="leaf-particle"></div>
          <div className="leaf-particle"></div>
          <div className="leaf-particle"></div>
          <div className="leaf-particle"></div>
          <div className="leaf-particle"></div>
          <div className="leaf-particle"></div>
          <div className="leaf-particle"></div>
          <div className="leaf-particle"></div>
          <div className="leaf-particle"></div>
        </div>
        <Navigation />
        <main className="relative z-10 min-h-screen page-transition">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}