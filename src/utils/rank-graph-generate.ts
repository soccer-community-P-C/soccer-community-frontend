import { EChartsOption, SeriesOption } from 'echarts';
import { TTeamList, TTeamRankInfo } from '@/types/leagues';

/* eslint-disable-next-line */
const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>{}\[\]\\\/ ]/gim;

function makeTooltipHTMLWithLogo(
  seriesName: string, // 팀이름
  name: string, // 주차
  value: string | number, // 순위
  teamList: TTeamList,
): string {
  const teamLogo = teamList.find((team) => team.leagueTeamName === seriesName)?.logo;
  return `
          <div style="display: flex">
          ${teamLogo ? `<img style="width:24px; height:24px; margin-right: 4px" src=${teamLogo} alt=${teamLogo}/>` : null} <span>${seriesName}</span>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span>${name}</span>
            <span style="font-weight: bold">${value}위</span>
          </div>`;
}

class RankGraphGenerator {
  private teamRankData: TTeamRankInfo;
  private readonly matchDayList: number[];
  private rankingData: Record<string, number[]>;

  constructor(teamRankData: TTeamRankInfo) {
    this.teamRankData = teamRankData;
    this.matchDayList = this.generateMatchDayList();
    this.rankingData = this.generateRankingData();
  }

  private generateMatchDayList(): number[] {
    const allMatchDays = this.teamRankData.rankInfo.map((info) => info.matchDay);
    const week = 5; // 보여줄 x갯수 = 5개 주

    // 최근 5주차 순위 그래프
    const start = Math.max(1, allMatchDays[allMatchDays.length - 1] + 1 - week);
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

  private makeRich(teamList: TTeamList) {
    const rich: {
      [key: number | string]: {
        backgroundColor: {
          image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | string;
        };
        height: number;
      };
    } = {};
    Object.entries(this.rankingData).forEach(([name]) => {
      const teamName = name.replace(reg, '');
      const teamLogo = teamList.find((team) => team.leagueTeamName === name)?.logo;
      rich[teamName] = {
        backgroundColor: {
          image: teamLogo || '',
        },
        height: 20,
      };
    });

    return rich;
  }

  private generateSeriesList(teamList: TTeamList): SeriesOption[] {
    const rich = this.makeRich(teamList);
    return Object.entries(this.rankingData).map(([name, data]) => ({
      name,
      symbolSize: 15,
      type: 'line',
      smooth: true,
      emphasis: { focus: 'series' },
      endLabel: {
        show: true,
        formatter: (params) => {
          const teamName = params.seriesName?.replace(reg, '');
          return `{${teamName}|} ${params.seriesName}`;
        },
        distance: 20,
        rich,
      },
      lineStyle: { width: 4 },
      data,
    }));
  }

  private get addedWeekMatchDayList() {
    return this.matchDayList.map((matchDay) => `${matchDay}주차`);
  }

  public generateOption(teamList: TTeamList): EChartsOption {
    return {
      title: { text: '팀 순위 그래프' }, // 그래프 타이틀
      tooltip: {
        // 호버시 띄울 tooltip
        trigger: 'item',
        formatter: function (params) {
          if (Array.isArray(params)) return ``;

          return makeTooltipHTMLWithLogo(
            params.seriesName as string,
            params.name,
            params.value as string | number,
            teamList,
          );
        },
      },
      grid: {
        left: 30,
        right: 200,
        bottom: 30,
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        // x축 데이터 생성
        type: 'category',
        splitLine: { show: true },
        axisLabel: {
          margin: 30,
          fontSize: 16,
        },
        boundaryGap: false,
        data: this.addedWeekMatchDayList,
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          margin: 30,
          fontSize: 16,
          formatter: '{value}위',
        },
        inverse: true,
        interval: 1,
        min: 1,
        // max: Object.keys(this.rankingData).length,
        max: 10,
      },
      series: this.generateSeriesList(teamList),
    };
  }
}

export function generateRankGraph(teamRankData: TTeamRankInfo, teamList: TTeamList): EChartsOption {
  const generator = new RankGraphGenerator(teamRankData);
  return generator.generateOption(teamList);
}
