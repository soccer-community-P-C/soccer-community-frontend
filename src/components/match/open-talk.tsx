import { IconBrandHipchat, IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useState } from 'react';

export default function OpenTalk() {
  const [isTalkOpen, setIsTalkOpen] = useState(false);

  return (
    <>
      <div className="flex w-full justify-between p-2 pt-0 xl:p-0">
        <strong>응원 오픈톡</strong>
        <button onClick={() => setIsTalkOpen((prevState) => !prevState)} type="button">
          {isTalkOpen ? <IconChevronUp stroke={2} /> : <IconChevronDown stroke={2} />}
        </button>
      </div>
      <hr />
      <div className="flex-all-center h-full w-full flex-col opacity-70">
        <IconBrandHipchat height={96} stroke={2} width={96} />
        <p>응원 톡이 접혀 있어요</p>
      </div>
    </>
  );
}
