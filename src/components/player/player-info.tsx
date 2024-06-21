import { IconChevronRight } from '@tabler/icons-react';
import LinkItem from '@/components/common/link-item';
import PlayerInfoItem from '@/components/player/player-info-item';

export default function PlayerInfo() {
  return (
    <div className="mt-[8px] basis-2/5">
      <h4 className="mb-2 max-w-[432px] truncate text-2xl font-semibold">엘랑 홀란드</h4>
      <div className="mb-2 overflow-hidden">
        <span className="float-left mr-4 text-lg leading-9">No.9</span>
        <LinkItem className="flex-all-center float-left text-lg leading-9 " href="#">
          맨체스터 시티
          <IconChevronRight stroke={2} />
        </LinkItem>
      </div>
      <div className="table">
        <div className="float-left pr-[44px]">
          <PlayerInfoItem description="2000.07.21" title="출생" />
          <PlayerInfoItem description="194cm" title="키" />
        </div>
        <div className="float-left pr-[44px]">
          <PlayerInfoItem description="공격수" title="포지션" />
          <PlayerInfoItem description="88kg" title="몸무게" />
        </div>
      </div>
    </div>
  );
}
