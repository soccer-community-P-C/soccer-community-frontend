import localFont from 'next/font/local';
import MainHeader from '@/components/MainHeader/MainHeader';
import MainFooter from '@/components/MainFooter/MainFooter';

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '해외축구 커뮤니티',
  description: '해외축구 커뮤니티 by create next app',
};

const pretendard = localFont({
  src: '../assets/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className} bg-gray-200`}>
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
