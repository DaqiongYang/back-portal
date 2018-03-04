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
            text: '就业推荐数',
            x: 'center',
            y: 'top',
            textStyle: {
              fontSize: 18,
              fontWeight: 'bolder',
              color: '#2eccf4'
            }
          },
          {
            text: '数量(人)',
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
          name: '年',
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

          boundaryGap: false,
          data: ['2014', '2015', '2016', '2017', '2018']
        },
        yAxis: {
          type: 'value',
          boundaryGap: true,
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
          data: [250, 508, 262, 760, 480],
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
