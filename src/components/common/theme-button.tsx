import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ThemeButton() {
  const { setTheme } = useTheme();

  return (
    <Button className="ring-0 ring-offset-0 focus-visible:ring-0" size="icon" variant="ghost">
      <Sun
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        onClick={() => setTheme('right')}
      />
      <Moon
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        onClick={() => setTheme('dark')}
      />
    </Button>

    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button className="ring-0 ring-offset-0 focus-visible:ring-0" size="icon" variant="ghost">
    //       <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    //       <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    //       <span className="sr-only">Toggle theme</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end">
    //     <DropdownMenuItem onClick={() => setTheme('light')}>
    //       <Sun className="mr-2 h-[1.2rem] w-[1.2rem]" />
    //       <span>밝게</span>
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme('dark')}>
    //       <Moon className="mr-2 h-[1.2rem] w-[1.2rem]" />
    //       <span>어둡게</span>
    //     </DropdownMenuItem>
    //     {/*<DropdownMenuItem onClick={() => setTheme('system')}>*/}
    //     {/*  <MonitorCog className="mr-2 h-[1.2rem] w-[1.2rem]" />*/}
    //     {/*  <span>시스템 설정</span>*/}
    //     {/*</DropdownMenuItem>*/}
    //   </DropdownMenuContent>
    // </DropdownMenu>
  );
}
