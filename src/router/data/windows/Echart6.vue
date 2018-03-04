<template>
<chart :options="polar" auto-resize></chart>
</template>

<script>
export default {
  data() {
    return {
      polar: {
        color: ['#C3505D', '#83B15A'],
        title: [
          {
            text: '贫困户脱贫情况',
            x: 'center',
            y: 'top',
            textStyle: {
              fontSize: 18,
              fontWeight: 'bolder',
              color: '#2eccf4'
            }
          },
          {
            text: '数量(户)',
            x: '82%',
            y: '31',
            textStyle: {
              fontSize: 12,
              fontWeight: 'bolder',
              color: '#fff'
            }
          }
        ],
        legend: {
          x: 'center',
          y: 30,
          data: ['贫困户', '脱贫户'],
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '13%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#87baf8'
          },
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          axisLabel: {
            color: '#87baf8'
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#012f65'
            }
          }
        },
        series: [
          {
            name: '贫困户',
            type: 'bar',
            stack: '总量',
            barWidth: '58%',
            label: {
              normal: {
                show: false,
                position: 'inside'
              }
            },
            data: [15800, 12000, 10000, 8000, 7000, 7300, 6500, 6000, 5500, 5000, 4500, 3000]
          },
          {
            name: '脱贫户',
            type: 'bar',
            stack: '总量',
            barWidth: '58%',
            label: {
              normal: {
                show: false,
                position: 'inside'
              }
            },
            data: [4800, 4000, 3500, 3800, 5000, 3700, 3000, 2800, 2500, 2000, 1000, 500]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.echarts {
  width: auto;
  z-index: 999;
}
</style>
