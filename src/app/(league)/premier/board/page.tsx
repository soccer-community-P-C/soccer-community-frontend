'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { IconMessage, IconEye, IconThumbUp } from '@tabler/icons-react';
import Box from '@/components/common/box';
import Pagination from '@/components/board/pagination';
import Button from '@/components/common/button';
import Input from '@/components/common/input';

export default function PremierBoardPage() {
  const league = usePathname().split('/')[1];
  const router = useRouter();

  return (
    <>
      <Box className="mx-auto gap-0 px-0 pb-4 pt-2">
        <div className="flex border-b-[1px] border-zinc-300 py-2">
          <div className="flex w-[10%] items-center justify-center gap-1">
            <IconThumbUp className="flex-shrink-0" /> 12K
          </div>
          <div className="flex w-4/5 flex-col gap-2 pr-3">
            <Link href="#">
              음바페 “좋은 결과가 있을 때는 내가 모든 빛을 가져가니 좋은 결과가 아닐 때도 모든
              그림자는 내가 가져가야 한다“
            </Link>
            <div className="flex items-center gap-1 text-sm">
              <div className="h-5 w-5 rounded-full bg-gray-400" />
              <div>소고기</div>•<div className="text-gray-500">1분 전</div>
            </div>
          </div>
          <div className="flex w-[10%] flex-col justify-center">
            <div className="flex gap-2">
              <IconMessage className="flex-shrink-0" /> 1
            </div>
            <div className="flex gap-2">
              <IconEye className="flex-shrink-0" /> 24K
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-6 pt-4">
          <div />
          <Pagination />
          <Button className="w-28" onClick={() => router.push(`/${league}/write`)} role="link">
            글쓰기
          </Button>
        </div>
      </Box>
      <div className="mx-auto mt-4 flex max-w-sm">
        <Input />
        <Button className="h-10">검색</Button>
      </div>
    </>
  );
}
