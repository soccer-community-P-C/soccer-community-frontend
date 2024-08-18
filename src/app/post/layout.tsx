import { ReactNode } from 'react';
import Container from '@/components/common/container';

type LayoutProps = {
  children: ReactNode;
};

export default function PostLayout({ children }: LayoutProps) {
  return <Container>{children}</Container>;
}
