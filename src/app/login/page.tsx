import Link from 'next/link';
import Input from '@/components/Common/input';

export default function LogInPage() {
  return (
    <form className="mx-auto flex max-w-sm flex-col gap-5 pt-16">
      <span className="text-center text-3xl font-bold">로그인</span>
      <div className="flex flex-col gap-2">
        <label htmlFor="id">아이디</label>
        <Input id="id" required type="text" />

        <label htmlFor="password">비밀번호</label>
        <Input id="password" required type="password" />
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
