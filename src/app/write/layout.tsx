import { ReactNode } from 'react';
import Container from '@/components/common/container';

type WriteProps = {
  children: ReactNode;
};

export default function WriteLayout({ children }: WriteProps) {
  return <Container>{children}</Container>;
}
