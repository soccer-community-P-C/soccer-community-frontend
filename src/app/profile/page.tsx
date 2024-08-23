'use client';

import { useEffect, useState } from 'react';
import Box from '@/components/common/box';
import BoxHeading from '@/components/common/box-heading';
import Button from '@/components/common/button';
import Input from '@/components/common/input';
import { LoadingSpinner } from '@/components/common/loading-spinner';
import useInput from '@/hooks/useInput';
import { useGetMember, useUpdateMember } from '@/api/member';

export default function ProfilePage() {
  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const nickname = useInput('');
  const { data: member } = useGetMember();
  const { mutate: updateMember, isPending: isPendingUpdateNickname } = useUpdateMember({
    onSuccess: () => setIsEditingNickname(false),
    onError: () => alert('닉네임을 변경하는데 실패했습니다.'),
  });

  const hasNicknameChanged = nickname.value !== member?.nickName;

  function handleClickEditNickname() {
    setIsEditingNickname(true);
  }

  function handleClickCancel() {
    setIsEditingNickname(false);
    nickname.onChange(member?.nickName || '');
  }

  function handleClickSave() {
    if (!hasNicknameChanged) return;
    updateMember({ nickName: nickname.value });
  }

  useEffect(() => {
    if (member) {
      nickname.onChange(member.nickName);
    }
  }, [member]);

  return (
    <Box className="mx-auto max-w-[38rem]">
      <div className="mx-auto max-w-72">
        <BoxHeading className="mb-12 text-3xl" hTagType="h2">
          프로필
        </BoxHeading>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">이메일</label>
          <Input disabled id="email" value={member?.email} />
          <label htmlFor="nickname">닉네임</label>
          <div className="mb-8 flex items-center gap-1">
            <Input
              disabled={!isEditingNickname}
              id="nickname"
              onChange={nickname.onChange}
              value={nickname.value}
            />
            {isEditingNickname ? (
              <>
                <Button onClick={handleClickCancel}>취소</Button>
                <Button
                  disabled={isPendingUpdateNickname || !hasNicknameChanged}
                  onClick={handleClickSave}
                >
                  {isPendingUpdateNickname ? <LoadingSpinner /> : '저장'}
                </Button>
              </>
            ) : (
              <Button onClick={handleClickEditNickname}>변경</Button>
            )}
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
