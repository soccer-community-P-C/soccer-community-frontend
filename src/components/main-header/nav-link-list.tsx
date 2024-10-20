import NavLinkItem from '@/components/main-header/nav-link-item';
import { linkList } from '@/components/main-header/link-list-util';

export default function NavLinkList() {
  return (
    <>
      {linkList.map((link, index) => (
        <NavLinkItem key={index} link={link} />
      ))}
    </>
  );
}
