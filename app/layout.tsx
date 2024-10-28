import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import NavBar from '@/components/NavBar';
import UIProviders from './NextUIProvider';
import Footer from '@/components/Footer';

const lato = localFont({
  src: './fonts/Lato-Regular.woff',
  variable: '--font-lato',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} antialiased text-foreground bg-white`}>
        <UIProviders>
          <NavBar />
          {children}
          <Footer />
        </UIProviders>
      </body>
    </html>
  );
}
