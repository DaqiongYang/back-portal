<template>
<chart :options="polar" auto-resize></chart>
</template>

<script>
export default {
  data() {
    return {
      polar: {
        color: ['#de9b32'],
        title: [
          {
            text: '留守儿童父母外出务工人数',
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
          left: '3%',
          right: '4%',
          bottom: '6%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
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
          },
          data: []        
        },
        yAxis: {
          boundaryGap: [0, 0.1],
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
          }
        },
        series: [{
          data: [],
          barWidth: '58%',
          label: {
            show: true,
            position: 'top',
            color: '#fff'
          },
          type: 'bar'
        }]
      }
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$http.get(process.env.API_URL_ECHART9, { params: null }).then(res => {
        this.polar.xAxis.data = res.data.name
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
