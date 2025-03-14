import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import './globals.css';

const geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bingwa wa skiza',
  description: 'You stand a chance to win big!  Enter your phone number to participate',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistMono.className} bg-gray-900 text-gray-200`}>
        {children}
      </body>
    </html>
  );
}
