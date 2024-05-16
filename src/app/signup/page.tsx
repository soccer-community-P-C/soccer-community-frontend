import Input from '@/components/common/Input';

export default function SignUpPage() {
  return (
    <form className="mx-auto flex max-w-sm flex-col gap-5 pt-16">
      <span className="text-center text-3xl font-bold">회원가입</span>
      <div className="flex flex-col gap-2">
        <label htmlFor="id">아이디</label>
        <Input id="id" required type="text" />

        <label htmlFor="password">비밀번호</label>
        <Input id="password" required type="password" />

        <label htmlFor="confirm_password">비밀번호 확인</label>
        <Input id="confirm_password" required type="password" />

        <label htmlFor="nickname">닉네임</label>
        <Input id="nickname" required type="text" />
      </div>
      <button className="rounded-md bg-zinc-600 py-3 text-white" type="submit">
        회원가입
      </button>
    </form>
  );
}
