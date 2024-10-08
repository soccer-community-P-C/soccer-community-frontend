import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ThemeButton() {
  const { setTheme } = useTheme();

  return (
    <>
      <Button
        className="absolute rotate-90 scale-0 ring-0 ring-offset-0 transition-all focus-visible:ring-0 dark:rotate-0 dark:scale-100"
        onClick={() => setTheme('right')}
        size="icon"
        variant="ghost"
      >
        <Sun className="absolute h-[1.2rem] w-[1.2rem]" />
      </Button>
      <Button
        className="rotate-0 scale-100 ring-0 ring-offset-0 transition-all focus-visible:ring-0 dark:-rotate-90 dark:scale-0"
        onClick={() => setTheme('dark')}
        size="icon"
        variant="ghost"
      >
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </>
  );
}
