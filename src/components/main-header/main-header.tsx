import MainNav from '@/components/main-header/main-nav';
import MobileNav from '@/components/main-header/mobile-nav';

export default function MainHeader() {
  return (
    <header className="sticky top-0 z-40 h-[4rem] w-full bg-gray-600 duration-500">
      <MainNav />
      <MobileNav />
    </header>
  );
}
