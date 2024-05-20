import { IconCaretLeftFilled, IconCaretRightFilled } from '@tabler/icons-react';
import Button from '@/components/Common/Button';

export default function DatePicker() {
  return (
    <nav className="flex justify-center gap-4">
      <Button>
        <IconCaretLeftFilled />
      </Button>
      <Button>2024-05-21</Button>
      <Button>2024-05-21</Button>
      <Button>2024-05-21</Button>
      <Button>2024-05-21</Button>
      <Button>2024-05-21</Button>
      <Button>
        <IconCaretRightFilled />
      </Button>
    </nav>
  );
}
