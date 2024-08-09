import BoxHeading from '@/components/common/box-heading';

export default function PlayerCareer() {
  // Todo: 경력사항 추가 필요
  return (
    <>
      <BoxHeading hTagType="h3">경력 사항</BoxHeading>
      <table className="relative table-fixed overflow-hidden">
        <tbody>
          <tr>
            <th className="w-[200px] text-left text-[16px]">2024.01~</th>
            <td className="text-left text-[16px]">맨체스터 시티</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
