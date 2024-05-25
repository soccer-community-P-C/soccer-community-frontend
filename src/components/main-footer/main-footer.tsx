import Link from 'next/link';

export default function MainFooter() {
  return (
    <footer className="flex h-32 w-full items-center justify-center bg-gray-600 p-4 text-center text-xs text-white duration-500">
      <div>
        <ul className="flex flex-row justify-center gap-8 ">
          <li>
            <Link href="#">이용약관</Link>
          </li>
          <li>
            <Link href="#">사이트 이용 문의</Link>
          </li>
          <li>
            <Link href="#">개인정보처리방침</Link>
          </li>
        </ul>
        <div className="pt-2">Copyright by Soccer. All rights reserved. Since 2024</div>
      </div>
    </footer>
  );
}
