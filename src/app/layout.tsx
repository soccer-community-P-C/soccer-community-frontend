import localFont from 'next/font/local';
import MainHeader from '@/components/main-header/main-header';
import MainFooter from '@/components/main-footer/main-footer';
import ReactQueryProviders from '@/components/react-query-providers';
import { AuthProvider } from '@/contexts/auth-context';
import { ThemeProvider } from '@/components/theme-provider';
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${pretendard.className} h-full bg-background`}>
        <ReactQueryProviders>
          <AuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              disableTransitionOnChange
              enableSystem
            >
              <MainHeader />
              <main className="min-h-screen-main bg-background py-2 md:py-8">{children}</main>
              <MainFooter />
            </ThemeProvider>
          </AuthProvider>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
