'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Input from '@/components/common/input';
import ErrorMessage from '@/components/auth-form/error-message';
import Label from '@/components/auth-form/label';

type TLoginInputs = {
  email: string;
  password: string;
};

export default function LogInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginInputs>({
    mode: 'onSubmit',
    defaultValues: { email: '', password: '' },
  });

  function onLogin(data: TLoginInputs) {
    console.log(data);
  }

  return (
    <form className="mx-auto flex max-w-sm flex-col gap-5 pt-16" onSubmit={handleSubmit(onLogin)}>
      <span className="text-center text-3xl font-bold">로그인</span>
      <div className="flex flex-col gap-2">
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
      </div>
      <button className="rounded-md bg-zinc-600 py-3 text-white" type="submit">
        로그인
      </button>
      <div className="flex justify-end gap-2">
        아직 계정이 없으신가요?
        <Link className="text-right font-bold text-blue-700 underline" href="/signup">
          회원가입
        </Link>
      </div>
    </form>
  );
}
