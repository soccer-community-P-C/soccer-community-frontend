import { ReactNode } from 'react';
import ContentHeader from '@/components/Common/content-header/content-header';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <section className="mx-auto my-4 w-4/5">
      <header>
        <ContentHeader />
      </header>

      <article className="mt-4">{children}</article>
    </section>
  );
}
