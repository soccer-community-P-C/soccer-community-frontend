import localFont from 'next/font/local';
import MainHeader from '@/components/main-header/main-header';
import MainFooter from '@/components/main-footer/main-footer';
import ReactQueryProviders from '@/components/react-query-providers';
import { ResultOfGameListProvider } from '@/context/result-of-game-context';

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
    <html className="h-full" lang="en">
      <body className={`${pretendard.className} h-full bg-gray-200`}>
        <ReactQueryProviders>
          <MainHeader />
          <ResultOfGameListProvider>
            <main className="min-h-[calc(100%-8rem-4rem)] py-8">{children}</main>
          </ResultOfGameListProvider>
          <MainFooter />
        </ReactQueryProviders>
      </body>
    </html>
  );
}
