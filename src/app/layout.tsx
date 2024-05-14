import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MainHeader from '@/components/MainHeader/MainHeader';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });

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
      {/*<body className={inter.className}>*/}
      <body className={pretendard.className}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
