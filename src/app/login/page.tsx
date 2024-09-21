'use client';

// import Link from 'next/link';
// import { useForm } from 'react-hook-form';
// import { Input } from '@/components/ui/input';
// import ErrorMessage from '@/components/auth-form/error-message';
// import Label from '@/components/auth-form/label';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// import { LoadingSpinner } from '@/components/common/loading-spinner';
import Box from '@/components/common/box';
// import BoxHeading from '@/components/common/box-heading';
// import { useLogin } from '@/api/auth/use-login';
// import { TLoginInputs } from '@/types/auth';
import withoutAuth from '@/hocs/withoutAuth';

function LogInPage() {
  // const { data, refetch } = useGoogleLogin();
  // console.log('data = ', data);
  // console.log('data.accessToken = ', data?.accessToken);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<TLoginInputs>({
  //   mode: 'onSubmit',
  //   defaultValues: { email: '', password: '' },
  // });
  // const { mutate, isPending, isSuccess, isError } = useLogin();
  //
  // function onLogin(data: TLoginInputs) {
  //   mutate(data);
  // }

  // if (data && data.accessToken) {
  //   setToken(data.accessToken);
  //   setAuthHeader(data.accessToken);
  //   setIsAuthenticated(true);
  // }

  return (
    <Box className="m-auto my-6 min-w-mobile max-w-md">
      <Button asChild={true}>
        <Link href="oauth2">카카오 로그인</Link>
      </Button>
      {/*<form className="mx-auto flex w-full flex-col gap-5" onSubmit={handleSubmit(onLogin)}>*/}
      {/*  <BoxHeading className="text-center font-bold" hTagType="h2">*/}
      {/*    로그인*/}
      {/*  </BoxHeading>*/}
      {/*  <div className="flex flex-col gap-2">*/}
      {/*    <Label error={errors.email} htmlFor="email">*/}
      {/*      이메일*/}
      {/*    </Label>*/}
      {/*    <Input*/}
      {/*      id="email"*/}
      {/*      type="email"*/}
      {/*      {...register('email', {*/}
      {/*        pattern: {*/}
      {/*          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,*/}
      {/*          message: '올바른 이메일 형식이 아닙니다.',*/}
      {/*        },*/}
      {/*        required: true,*/}
      {/*      })}*/}
      {/*    />*/}
      {/*    {errors.email ? <ErrorMessage>{errors.email.message}</ErrorMessage> : null}*/}

      {/*    <Label error={errors.password} htmlFor="password">*/}
      {/*      비밀번호*/}
      {/*    </Label>*/}
      {/*    <Input*/}
      {/*      id="password"*/}
      {/*      type="password"*/}
      {/*      {...register('password', {*/}
      {/*        required: true,*/}
      {/*        minLength: { value: 8, message: '8자 이상 입력해주세요.' },*/}
      {/*      })}*/}
      {/*    />*/}
      {/*    {errors.password ? <ErrorMessage>{errors.password.message}</ErrorMessage> : null}*/}
      {/*  </div>*/}
      {/*  {isError ? (*/}
      {/*    <p className="text-red-600">*/}
      {/*      등록되지 않은 이메일이거나 이메일 또는 비밀번호를 잘못 입력했습니다.*/}
      {/*    </p>*/}
      {/*  ) : null}*/}
      {/*  <Button disabled={isPending || isSuccess} type="submit">*/}
      {/*    {isPending || isSuccess ? <LoadingSpinner /> : '로그인'}*/}
      {/*  </Button>*/}
      {/*  <div className="flex justify-end gap-2">*/}
      {/*    아직 계정이 없으신가요?*/}
      {/*    <Link className="text-right font-bold text-blue-700 underline" href="/signup">*/}
      {/*      회원가입*/}
      {/*    </Link>*/}
      {/*  </div>*/}
      {/*</form>*/}
    </Box>
  );
}

export default withoutAuth(LogInPage);
