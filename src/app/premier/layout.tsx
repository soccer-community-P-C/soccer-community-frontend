import { ReactNode } from 'react';
import ContentHeader from '@/components/common/content-header/content-header';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <section className="mx-auto w-4/5">
      <ContentHeader />

      <article className="mt-4">{children}</article>
    </section>
  );
}
