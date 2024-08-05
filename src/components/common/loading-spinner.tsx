import { IconLoader2 } from '@tabler/icons-react';
import Box from '@/components/common/box';

export function LoadingSpinner() {
  return <IconLoader2 aria-label="로딩중" className="mx-auto animate-spin" role="status" />;
}

type LoadingBoxProps = {
  isHome?: boolean;
};

export function LoadingBox({ isHome }: LoadingBoxProps) {
  if (isHome) {
    return <LoadingSpinner />;
  }

  return (
    <Box className="flex-all-center h-[calc(100vh-8rem-6rem-4rem)]">
      <LoadingSpinner />
    </Box>
  );
}
