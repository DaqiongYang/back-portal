<template>
<chart :options="polar" auto-resize></chart>
</template>

<script>
export default {
  data() {
    return {
      polar: {
        color: ['#83B15A'],
        title: [
          {
            text: '就业前8省',
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
              color: '#fff'
            }
          }
        ],
        grid: {
          left: '4%',
          bottom: '8.6%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          axisTick: {
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
          scale: 100
        },
        yAxis: {
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
          data: []
        },
        series: [
          {
            data: [],
            type: 'bar',
            barWidth: '58%',
            label: {
              show: true,
              position: 'right',
              color: '#fff'
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$http.get(process.env.API_URL_ECHART11, { params: null }).then(res => {
        this.polar.yAxis.data = res.data.name
        this.polar.series[0].data = res.data.data
      }).catch(err => {
        console.log(err)
      })
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
