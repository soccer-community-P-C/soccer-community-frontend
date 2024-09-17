/*
  기존코드
 */

// import { EChartsOption, SeriesOption } from 'echarts';
// import { TTeamRank, TTeamRankInfo } from '@/types/leagues';
//
// type TRankingData = {
//   [teamName: string]: number[];
// };
//
// function generateRankingData(
//   teamRankData: TTeamRankInfo,
//   matchDayList: number[],
//   names: string[],
// ): Map<string, number[]> {
//   const map: Map<string, number[]> = new Map();
//
//   for (const matchDay of matchDayList) {
//     names.forEach((name, i) => {
//       const ranks = teamRankData.rankInfo[matchDay - 1].ranks;
//       const selectRank = ranks.find((rank) => rank.teamName === name) as TTeamRank;
//
//       map.set(name, (map.get(name) || []).concat(selectRank.rank));
//     });
//   }
//   return map;
// }
//
// function getTeamNameList(teamRankData: TTeamRankInfo) {
//   return teamRankData.rankInfo[0].ranks.map((data) => data.teamName);
// }
//
// function generateSeriesList(
//   teamRankData: TTeamRankInfo,
//   matchDayList: number[],
//   names: string[],
// ): SeriesOption[] {
//   const seriesList: SeriesOption[] = [];
//   const rankingMap = generateRankingData(teamRankData, matchDayList, names);
//
//   rankingMap.forEach((data, name) => {
//     const series: SeriesOption = {
//       name,
//       symbolSize: 20,
//       type: 'line',
//       smooth: true,
//       emphasis: {
//         focus: 'series',
//       },
//       endLabel: {
//         show: true,
//         formatter: '{a}',
//         distance: 20,
//       },
//       lineStyle: {
//         width: 4,
//       },
//       data,
//     };
//     seriesList.push(series);
//   });
//
//   return seriesList;
// }
//
// function generateMatchDayList(matchDayList: number[]) {
//   // 매치데이 최근까지 최대 10개 배열만 반환하는 함수
//   // ex) 최대 matchDay가 15라면 6~15
//   // ex) 최대 matchDay사 5라면 1~5
//
//   let standardLength = matchDayList[matchDayList.length - 1] - 10;
//   if (standardLength <= 0) {
//     standardLength = 1;
//   }
//
//   return matchDayList.slice(standardLength - 1, matchDayList.length);
// }
//
// export function generateRankGraph(teamRankData: TTeamRankInfo) {
//   let matchDayList = teamRankData.rankInfo.map((info) => info.matchDay);
//   const names = getTeamNameList(teamRankData);
//   matchDayList = generateMatchDayList(matchDayList);
//
//   const option: EChartsOption = {
//     title: {
//       text: 'Bump Chart (Ranking)',
//     },
//     tooltip: {
//       trigger: 'item',
//     },
//     grid: {
//       left: 30,
//       right: 110,
//       bottom: 30,
//       containLabel: true,
//     },
//     toolbox: {
//       feature: {
//         saveAsImage: {},
//       },
//     },
//     xAxis: {
//       type: 'category',
//       splitLine: {
//         show: true,
//       },
//       axisLabel: {
//         margin: 30,
//         fontSize: 16,
//       },
//       boundaryGap: false,
//       data: matchDayList,
//     },
//     yAxis: {
//       type: 'value',
//       axisLabel: {
//         margin: 30,
//         fontSize: 16,
//         formatter: '#{value}',
//       },
//       inverse: true,
//       interval: 1,
//       min: 1,
//       // max: names.length,
//       max: 10,
//     },
//     series: generateSeriesList(teamRankData, matchDayList, names),
//   };
//
//   return option;
// }

/*
  리팩토링한 코드
 */

// import { EChartsOption, SeriesOption } from 'echarts';
// import { TTeamRankInfo } from '@/types/leagues';
//
// interface RankingData {
//   [teamName: string]: number[];
// }
//
// function generateRankingData(teamRankData: TTeamRankInfo, matchDayList: number[]): RankingData {
//   const rankingData: RankingData = {};
//
//   matchDayList.forEach((matchDay, index) => {
//     teamRankData.rankInfo[matchDay - 1].ranks.forEach((rank) => {
//       if (!rankingData[rank.teamName]) {
//         rankingData[rank.teamName] = [];
//       }
//       rankingData[rank.teamName][index] = rank.rank;
//     });
//   });
//
//   return rankingData;
// }
//
// function generateSeriesList(rankingData: RankingData): SeriesOption[] {
//   return Object.entries(rankingData).map(([name, data]) => ({
//     name,
//     symbolSize: 20,
//     type: 'line',
//     smooth: true,
//     emphasis: { focus: 'series' },
//     endLabel: {
//       show: true,
//       formatter: '{a}',
//       distance: 20,
//     },
//     lineStyle: { width: 4 },
//     data,
//   }));
// }
//
// function generateMatchDayList(matchDayList: number[]): number[] {
//   const start = Math.max(1, matchDayList[matchDayList.length - 1] - 9);
//   return matchDayList.slice(start - 1);
// }
//
// export function generateRankGraph(teamRankData: TTeamRankInfo): EChartsOption {
//   const matchDayList = generateMatchDayList(teamRankData.rankInfo.map((info) => info.matchDay));
//   const rankingData = generateRankingData(teamRankData, matchDayList);
//
//   return {
//     title: { text: '팀 순위 그래프' },
//     tooltip: { trigger: 'item' },
//     grid: {
//       left: 30,
//       right: 110,
//       bottom: 30,
//       containLabel: true,
//     },
//     toolbox: {
//       feature: { saveAsImage: {} },
//     },
//     xAxis: {
//       type: 'category',
//       splitLine: { show: true },
//       axisLabel: {
//         margin: 30,
//         fontSize: 16,
//       },
//       boundaryGap: false,
//       data: matchDayList,
//     },
//     yAxis: {
//       type: 'value',
//       axisLabel: {
//         margin: 30,
//         fontSize: 16,
//         formatter: '#{value}',
//       },
//       inverse: true,
//       interval: 1,
//       min: 1,
//       max: 7,
//     },
//     series: generateSeriesList(rankingData),
//   };
// }

/*
  클로저를 이용
 */

// import { EChartsOption, SeriesOption } from 'echarts';
// import { TTeamRankInfo } from '@/types/leagues';
//
// export function generateRankGraph(teamRankData: TTeamRankInfo): EChartsOption {
//   function generateRankingData(matchDayList: number[]): Record<string, number[]> {
//     const rankingData: Record<string, number[]> = {};
//
//     matchDayList.forEach((matchDay, index) => {
//       teamRankData.rankInfo[matchDay - 1].ranks.forEach((rank) => {
//         if (!rankingData[rank.teamName]) {
//           rankingData[rank.teamName] = [];
//         }
//         rankingData[rank.teamName][index] = rank.rank;
//       });
//     });
//
//     return rankingData;
//   }
//
//   function generateSeriesList(rankingData: Record<string, number[]>): SeriesOption[] {
//     return Object.entries(rankingData).map(([name, data]) => ({
//       name,
//       symbolSize: 20,
//       type: 'line',
//       smooth: true,
//       emphasis: { focus: 'series' },
//       endLabel: {
//         show: true,
//         formatter: '{a}',
//         distance: 20,
//       },
//       lineStyle: { width: 4 },
//       data,
//     }));
//   }
//
//   function generateMatchDayList(): number[] {
//     const allMatchDays = teamRankData.rankInfo.map((info) => info.matchDay);
//     const start = Math.max(1, allMatchDays[allMatchDays.length - 1] - 9);
//     return allMatchDays.slice(start - 1);
//   }
//
//   const matchDayList = generateMatchDayList();
//   const rankingData = generateRankingData(matchDayList);
//
//   return {
//     title: { text: '팀 순위 그래프' },
//     tooltip: { trigger: 'item' },
//     grid: {
//       left: 30,
//       right: 110,
//       bottom: 30,
//       containLabel: true,
//     },
//     toolbox: {
//       feature: { saveAsImage: {} },
//     },
//     xAxis: {
//       type: 'category',
//       splitLine: { show: true },
//       axisLabel: {
//         margin: 30,
//         fontSize: 16,
//       },
//       boundaryGap: false,
//       data: matchDayList,
//     },
//     yAxis: {
//       type: 'value',
//       axisLabel: {
//         margin: 30,
//         fontSize: 16,
//         formatter: '#{value}',
//       },
//       inverse: true,
//       interval: 1,
//       min: 1,
//       max: 7,
//     },
//     series: generateSeriesList(rankingData),
//   };
// }

/*
  클래스를 이용
 */

import { EChartsOption, SeriesOption } from 'echarts';
import { TTeamRankInfo } from '@/types/leagues';

class RankGraphGenerator {
  private teamRankData: TTeamRankInfo;
  private matchDayList: number[];
  private rankingData: Record<string, number[]>;

  constructor(teamRankData: TTeamRankInfo) {
    this.teamRankData = teamRankData;
    this.matchDayList = this.generateMatchDayList();
    this.rankingData = this.generateRankingData();
  }

  private generateMatchDayList(): number[] {
    const allMatchDays = this.teamRankData.rankInfo.map((info) => info.matchDay);
    const start = Math.max(1, allMatchDays[allMatchDays.length - 1] - 9);
    return allMatchDays.slice(start - 1);
  }

  private generateRankingData(): Record<string, number[]> {
    const rankingData: Record<string, number[]> = {};

    this.matchDayList.forEach((matchDay, index) => {
      this.teamRankData.rankInfo[matchDay - 1].ranks.forEach((rank) => {
        if (!rankingData[rank.teamName]) {
          rankingData[rank.teamName] = [];
        }
        rankingData[rank.teamName][index] = rank.rank;
      });
    });

    return rankingData;
  }

  private generateSeriesList(): SeriesOption[] {
    return Object.entries(this.rankingData).map(([name, data]) => ({
      name,
      symbolSize: 20,
      type: 'line',
      smooth: true,
      emphasis: { focus: 'series' },
      endLabel: {
        show: true,
        formatter: '{a}',
        distance: 20,
      },
      lineStyle: { width: 4 },
      data,
    }));
  }

  public generateOption(): EChartsOption {
    return {
      title: { text: '팀 순위 그래프' },
      tooltip: { trigger: 'item' },
      grid: {
        left: 30,
        right: 110,
        bottom: 30,
        containLabel: true,
      },
      toolbox: {
        feature: { saveAsImage: {} },
      },
      xAxis: {
        type: 'category',
        splitLine: { show: true },
        axisLabel: {
          margin: 30,
          fontSize: 16,
        },
        boundaryGap: false,
        data: this.matchDayList,
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          margin: 30,
          fontSize: 16,
          formatter: '#{value}',
        },
        inverse: true,
        interval: 1,
        min: 1,
        max: 7,
      },
      series: this.generateSeriesList(),
    };
  }
}

export function generateRankGraph(teamRankData: TTeamRankInfo): EChartsOption {
  const generator = new RankGraphGenerator(teamRankData);
  return generator.generateOption();
}

// function 안의 function 방식은 간단하고 즉시 실행 가능한 코드에 적합하며, 클래스 방식은 더 복잡한 로직이나 상태 관리가 필요한 경우, 또는 코드의 재사용성을 높이고 싶을 때 유용합니다.
