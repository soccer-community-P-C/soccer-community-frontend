'use client';

import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Button from '@/components/common/button';
import Input from '@/components/common/input';
import ErrorMessage from '@/components/auth-form/error-message';
import Label from '@/components/auth-form/label';
import { LoadingSpinner } from '@/components/common/loading-spinner';
import { useSignup } from '@/api/auth/use-signup';
import { TSignupInputs } from '@/types/auth';
import Box from '@/components/common/box';
import BoxHeading from '@/components/common/box-heading';
import withoutAuth from '@/hocs/withoutAuth';

function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<TSignupInputs>({
    mode: 'onSubmit',
    defaultValues: { email: '', password: '', confirmPassword: '', nickname: '' },
  });
  const { mutate, isPending, isSuccess } = useSignup();

  function onSubmit(data: TSignupInputs) {
    mutate(data);
  }

  return (
    <Box className="m-auto my-6 min-w-mobile max-w-md">
      <form className="mx-auto flex w-full flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <BoxHeading className="text-center font-bold text-black" hTagType="h2">
          회원가입
        </BoxHeading>
        <div className="flex flex-col gap-2">
          {/* TODO: Label, Input ErrorMessage를 한 컴포넌트로 분리 */}
          <Label error={errors.email} htmlFor="email">
            이메일
          </Label>
          <Input
            id="email"
            type="email"
            {...register('email', {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: '올바른 이메일 형식이 아닙니다.',
              },
              required: true,
            })}
          />
          {errors.email ? <ErrorMessage>{errors.email.message}</ErrorMessage> : null}

          <Label error={errors.password} htmlFor="password">
            비밀번호
          </Label>
          <Input
            id="password"
            type="password"
            {...register('password', {
              required: true,
              minLength: { value: 8, message: '8자 이상 입력해주세요.' },
            })}
          />
          {errors.password ? <ErrorMessage>{errors.password.message}</ErrorMessage> : null}

          <Label error={errors.confirmPassword} htmlFor="confirm_password">
            비밀번호 확인
          </Label>
          <Input
            id="confirm_password"
            type="password"
            {...register('confirmPassword', {
              required: true,
              minLength: { value: 8, message: '8자 이상 입력해주세요.' },
              validate: (confirmPassword) =>
                getValues('password') === confirmPassword ? true : '비밀번호가 일치하지 않습니다.',
            })}
          />
          {errors.confirmPassword ? (
            <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
          ) : null}

          <Label error={errors.nickname} htmlFor="nickname">
            닉네임
          </Label>
          <Input id="nickname" type="text" {...register('nickname', { required: true })} />
        </div>
        <Button disabled={isPending || isSuccess} type="submit">
          {isPending || isSuccess ? <LoadingSpinner /> : '회원가입'}
        </Button>
        <div className="flex justify-end gap-2">
          계정이 있으신가요?
          <Link className="text-right font-bold text-blue-700 underline" href="/login">
            로그인
          </Link>
        </div>
      </form>
    </Box>
  );
}

export default withoutAuth(SignUpPage);
