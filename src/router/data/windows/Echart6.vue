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
            color: '#87baf8',
            interval: 0,
            rotate: 45
          }
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
            data: []
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
            data: []
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
      this.$http.get(process.env.API_URL_ECHART6, { params: this.params }).then(res => {
        this.polar.xAxis.data = res.data.name
        this.polar.series[0].data = res.data.data1
        this.polar.series[1].data = res.data.data2
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
