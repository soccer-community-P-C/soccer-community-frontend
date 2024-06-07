import { ReactNode } from 'react';
import ContentHeader from '@/components/common/content-header/content-header';
import Container from '@/components/common/container';

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
