'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@/components/common/box';
import BoxHeading from '@/components/common/box-heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LoadingSpinner } from '@/components/common/loading-spinner';
import ErrorMessage from '@/components/auth-form/error-message';
import Label from '@/components/auth-form/label';
import useInput from '@/hooks/useInput';
import { useGetMember, useUpdateMember, useUpdatePassword } from '@/api/member';
import { TUpdatePassword } from '@/types/members';
import withAuth from '@/hocs/withAuth';

function ProfilePage() {
  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const nickname = useInput('');
  const { data: member } = useGetMember();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<TUpdatePassword>({
    mode: 'onChange',
    defaultValues: { currentPassword: '', newPassword: '' },
  });

  const { mutate: updateMember, isPending: isPendingUpdateNickname } = useUpdateMember({
    onSuccess: () => setIsEditingNickname(false),
    onError: () => alert('닉네임을 변경하는데 실패했습니다.'),
  });
  const { mutate: updatePassword } = useUpdatePassword({
    onSuccess: () => {
      alert('비밀번호가 변경되었습니다.');
      reset({ currentPassword: '', newPassword: '' });
    },
    onError: () => alert('현재 비밀번호를 확인해주세요.'),
  });

  const hasNicknameChanged = nickname.value !== member?.nickname;

  function handleClickEditNickname() {
    setIsEditingNickname(true);
  }

  function handleClickCancel() {
    setIsEditingNickname(false);
    nickname.onChange(member?.nickname || '');
  }

  function handleClickSave() {
    if (!hasNicknameChanged) return;
    updateMember({ nickname: nickname.value });
  }

  function onSubmitUpdatePassword(data: TUpdatePassword) {
    updatePassword(data);
  }

  useEffect(() => {
    if (member) {
      nickname.onChange(member.nickname);
    }
  }, [member, nickname]);

  return (
    <Box className="mx-auto min-w-mobile max-w-[38rem]">
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
          <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmitUpdatePassword)}>
            <Label error={errors.currentPassword} htmlFor="current_password">
              현재 비밀번호
            </Label>
            <Input
              id="current_password"
              type="password"
              {...register('currentPassword', {
                required: true,
                minLength: { value: 8, message: '8자 이상 입력해주세요.' },
              })}
            />
            {errors.currentPassword ? (
              <ErrorMessage>{errors.currentPassword.message}</ErrorMessage>
            ) : null}

            <Label error={errors.newPassword} htmlFor="new_password">
              새 비밀번호
            </Label>
            <Input
              id="new_password"
              type="password"
              {...register('newPassword', {
                required: true,
                minLength: { value: 8, message: '8자 이상 입력해주세요.' },
                validate: (newPassword) =>
                  newPassword !== getValues('currentPassword')
                    ? true
                    : '현재 비밀번호와 다르게 입력해주세요',
              })}
            />
            {errors.newPassword ? <ErrorMessage>{errors.newPassword.message}</ErrorMessage> : null}
            <Button className="ml-auto" type="submit">
              비밀번호 변경
            </Button>
          </form>
        </div>
      </div>
    </Box>
  );
}

export default withAuth(ProfilePage);
