import Link from 'next/link';

export default function MainHeader() {
  return (
    <div className={'sticky top-0 z-40 w-full h-16 bg-black duration-500'}>
      <header
        className={
          'w-[var(--max-content-width)] mx-auto flex text-white items-center justify-start h-full '
        }
      >
        <Link href={'/'} className={'mr-8'}>
          로고
        </Link>

        <nav className={'text-slate-300'}>
          <ul className={'flex space-x-8'}>
            <li>
              <Link href={'/premierLeague'}>프리미어리그</Link>
            </li>
            <li>
              <Link href={'/laliga'}>라리가</Link>
            </li>
            <li>
              <Link href={'/board'}>게시판</Link>
            </li>
          </ul>
        </nav>

        <div className={'text-amber-200 ml-auto'}>
          <Link href={'/login'}>로그인</Link>
          <Link href={'/login'}>Test</Link>
        </div>
      </header>
    </div>
  );
}
