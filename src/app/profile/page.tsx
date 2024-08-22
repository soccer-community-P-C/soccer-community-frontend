'use client';

import { useGetMember } from '@/api/member';
import Box from '@/components/common/box';
import BoxHeading from '@/components/common/box-heading';
import Button from '@/components/common/button';
import Input from '@/components/common/input';

export default function ProfilePage() {
  const { data } = useGetMember();

  return (
    <Box className="mx-auto max-w-[38rem]">
      <div className="mx-auto max-w-72">
        <BoxHeading className="mb-12 text-3xl" hTagType="h2">
          프로필
        </BoxHeading>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">이메일</label>
          <Input disabled id="email" value={data?.email} />
          <label htmlFor="nickname">닉네임</label>
          <div className="mb-8 flex items-center gap-1">
            <Input id="nickname" value={data?.nickName} />
            <Button>변경</Button>
          </div>
          <label htmlFor="current_password">현재 비밀번호</label>
          <Input id="current_password" />
          <label htmlFor="new_password">새 비밀번호</label>
          <Input id="new_password" />
          <Button className="ml-auto">비밀번호 변경</Button>
        </div>
      </div>
    </Box>
  );
}
