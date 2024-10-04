import { EChartsOption, SeriesOption } from 'echarts';
import { TTeamList, TTeamRankInfo } from '@/types/leagues';

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
      symbolSize: 15,
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

  private get addedWeekMatchDayList() {
    return this.matchDayList.map((matchDay) => `${matchDay}주차`);
  }

  public generateOption(teamList: TTeamList): EChartsOption {
    return {
      title: { text: '팀 순위 그래프' },
      tooltip: {
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
        max: Object.keys(this.rankingData).length,
      },
      series: this.generateSeriesList(),
    };
  }
}

export function generateRankGraph(teamRankData: TTeamRankInfo, teamList: TTeamList): EChartsOption {
  const generator = new RankGraphGenerator(teamRankData);
  return generator.generateOption(teamList);
}
