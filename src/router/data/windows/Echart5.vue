<template>
<chart :options="polar" auto-resize></chart>
</template>

<script>
export default {
  data() {
    return {
      polar: {
        color: ['#DE9B32', '#43D3FF'],
        title: [
          {
            text: '劳动力适合及需求统计',
            x: 'center',
            y: 'top',
            textStyle: {
              fontSize: 18,
              fontWeight: 'bolder',
              color: '#2eccf4'
            }
          },
          {
            text: '数量(万人)',
            x: '72%',
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
          data: ['适合', '有需求'],
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'axis',
          formatter: '{b}<br/> {a0}:{c0}万<br/>{a1}:{c1}万',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: [
          {
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
            data: ['技工', '管理', '普工']
          }
        ],
        yAxis: [
          {
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
          }
        ],
        series: [
          {
            name: '适合',
            type: 'bar',
            arGap: 0,
            label: {
              normal: {
                show: true,
                formatter: '{c0}万',
                fontSize: 12,
                rotate: 0,
                align: 'center',
                verticalAlign: 'middle',
                position: 'top',
                distance: 10
              }
            },
            data: [19, 16, 130]
          },
          {
            name: '有需求',
            type: 'bar',
            label: {
              normal: {
                show: true,
                formatter: '{c0}万',
                fontSize: 12,
                rotate: 0,
                align: 'center',
                verticalAlign: 'middle',
                position: 'top',
                distance: 10
              }
            },
            data: [25, 22, 187]
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
