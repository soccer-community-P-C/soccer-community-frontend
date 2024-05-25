import { ReactNode } from 'react';
import ContentHeader from '@/components/common/content-header/content-header';
import SectionContainer from '@/components/common/section-container';
import ArticleContainer from '@/components/common/article-container';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <SectionContainer>
      <ContentHeader />
      <ArticleContainer className="mt-4">{children}</ArticleContainer>
    </SectionContainer>
  );
}
