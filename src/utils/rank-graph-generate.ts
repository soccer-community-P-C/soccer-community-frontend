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
