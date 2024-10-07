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
  );
}
