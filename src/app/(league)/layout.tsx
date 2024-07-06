import { ReactNode } from 'react';
import Container from '@/components/common/container';
import ContentHeader from '@/components/common/content-header/content-header';

type LayoutProps = {
  children: ReactNode;
};

export default function LeagueLayout({ children }: LayoutProps) {
  return (
    <Container>
      <ContentHeader />
      {children}
    </Container>
  );
}
