import { twMerge } from 'tailwind-merge';
import { TTabList } from '@/components/home/home-rank';

type RankTabListProps = {
  tabList: TTabList[];
  onActiveTab: (index: number) => void;
  activeTab: number;
};

export default function RankTabList({ tabList, onActiveTab, activeTab }: RankTabListProps) {
  function handleTabChange(index: number) {
    onActiveTab(index);
  }

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <ul className="-mb-px flex flex-wrap text-center text-sm font-medium">
        {tabList.map((tab, index) => (
          <li className="relative z-10 min-w-0 flex-1 text-center" key={index}>
            <button
              className={twMerge(
                'inline-block w-full truncate rounded-t-lg border-b-2 p-4 px-[10px] py-0 text-lg leading-[43px]',
                index === activeTab
                  ? 'border-b-black font-semibold text-black'
                  : 'hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300',
              )}
              onClick={() => handleTabChange(index)}
              type="button"
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
