import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ weight: ['400'], style: 'normal', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Core Notes',
  description: 'Desafio Corelabs - Core Notes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          max-w-[91rem] mx-auto
          ${inter.className}
        `}
      >
        {children}
      </body>
    </html>
  );
}
