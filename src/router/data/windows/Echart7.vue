<template>
<chart :options="polar" auto-resize></chart>
</template>

<script>
export default {
  data() {
    return {
      polar: {
        color: ['#27b0d8'],
        title: [
          {
            text: '新增就业人口',
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
            x: '82%',
            y: '31',
            textStyle: {
              fontSize: 12,
              fontWeight: 'bolder',
              color: '#87baf8'
            }
          }
        ],
        xAxis: {
          name: '月',
          boundaryGap: false,
          nameTextStyle: {
            color: '#87baf8'
          },
          type: 'category',
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
          },
          data: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '18-1']
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
        series: [{
          data: [11.74, 19.76, 26.10, 33.12, 40.10, 46.68, 53.15, 55.30, 61.49, 66.96, 72.35, 6.03],
          type: 'line',
          symbol: 'emptyCircle',
          symbolSize: 10,
          label: {
            normal: {
              show: true
            }
          }
        }]
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
