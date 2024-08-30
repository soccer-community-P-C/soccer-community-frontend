import MainHeaderNav from '@/components/main-header/main-header-nav';

export default function MainHeader() {
  return (
    <header className="sticky top-0 z-40 h-[4rem] w-full min-w-mobile bg-gray-600 duration-500">
      <MainHeaderNav />
    </header>
  );
}
