import BoxHeading from '@/components/common/box-heading';

export default function PlayerCareer() {
  // Todo: 경력사항 추가 필요
  return (
    <>
      <BoxHeading hTagType="h3">경력 사항</BoxHeading>
      <table className="relative table-fixed overflow-hidden">
        <tbody>
          <tr className="sm-in:flex sm-in:flex-col">
            <th className="w-[200px] text-left text-[16px]">2024.01 ~ 2024.01</th>
            <td className="text-left text-[16px]">-</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
