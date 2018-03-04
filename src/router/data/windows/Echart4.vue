<template>
<chart :options="polar" auto-resize></chart>
</template>

<script>
export default {
  data() {
    return {
      polar: {
        color: ['#3BB4E5', '#C3505D', '#43D3FF'],
        tooltip: {},
        title: [
          {
            text: '劳动力性别结构',
            x: '8%',
            y: '8%',
            textStyle: {
              fontSize: 18,
              fontWeight: 'bolder',
              color: '#2eccf4'
            }
          },
          {
            text: '劳动力年龄别结构',
            x: '8%',
            y: '40%',
            textStyle: {
              fontSize: 18,
              fontWeight: 'bolder',
              color: '#2eccf4'
            }
          }
        ],
        xAxis: [
          {
            show: false,
            gridIndex: 0,
            type: 'value'
          },
          {
            show: false,
            gridIndex: 1,
            type: 'value'
          }
        ],
        yAxis: [
          {
            show: false,
            type: 'category',
            gridIndex: 0
          },
          {
            type: 'category',
            gridIndex: 1,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              color: '#87baf8'
            },
            data: ['16-36岁', '36-50岁', '51-60岁']
          }
        ],
        grid: [
          {
            top: '11%',
            bottom: '75%',
            right: '45%',
            left: '25%'
          },
          {
            top: '50%',
            bottom: '5%',
            left: '25%'
          }
        ],
        series: [
          // These series are in the first grid.
          { type: 'bar', seriesLayoutBy: 'row' },
          {
            name: '男',
            type: 'bar',
            stack: '堆叠条形图',
            label: {
              normal: {
                show: true,
                formatter: '{a}:{c}万',
                position: 'left'
              }
            },
            data: [490]
          },
          {
            name: '女',
            type: 'bar',
            stack: '堆叠条形图',
            label: {
              normal: {
                show: true,
                formatter: '{a}:{c}万',
                position: 'right'
              }
            },
            data: [308]
          },
          // These series are in the second grid.
          {
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            barWidth: '34%',
            label: {
              normal: {
                show: true,
                formatter: '{c}万',
                position: 'right'
              }
            },
            data: [620, 468, 82]
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
