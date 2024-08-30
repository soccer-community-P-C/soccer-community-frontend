// import MainNav from '@/components/main-header/main-nav';
// import MobileNav from '@/components/main-header/mobile-nav';
import MainNav2 from '@/components/main-header/main-nav-2';

export default function MainHeader() {
  return (
    <header className="sticky top-0 z-40 h-[4rem] w-full min-w-mobile bg-gray-600 duration-500">
      <MainNav2 />
      {/*<MainNav />*/}
      {/*<MobileNav />*/}
    </header>
  );
}
