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
          max-w-[120rem] mx-auto
          bg-[#F0F2F5]
          ${inter.className}
        `}
      >
        {children}
      </body>
    </html>
  );
}
