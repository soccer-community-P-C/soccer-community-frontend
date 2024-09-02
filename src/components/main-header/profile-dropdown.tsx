import Link from 'next/link';
import { IconUser } from '@tabler/icons-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type ProfileDropdownProps = {
  logout: () => void;
};

export default function ProfileDropdown({ logout }: ProfileDropdownProps) {
  function handleLogout() {
    logout();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild={true}>
        <button className="py-2" type="button">
          <IconUser />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href="/profile">프로필</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <button className="w-full" onClick={handleLogout} type="button">
            로그아웃
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
