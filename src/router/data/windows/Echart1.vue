<template>
<chart :options="polar" auto-resize></chart>
</template>

<script>
export default {
  data() {
    return {
      polar: {
        color: ['#3bb4e8', '#c7a11e', '#c35060'],
        tooltip: {
          trigger: 'item',
          formatter: '{a}<br/>{b}共{c}万人'
        },
        legend: {
          x: 'center',
          y: '80%',
          itemWidth: 12,
          itemHeight: 25,
          textStyle: {
            color: '#fff'
          }
        },
        graphic: {
          type: 'text',
          left: 'center',
          top: '37%',
          style: {
            text: '年龄结构',
            textAlign: 'center',
            fill: '#2eccf4',
            fontSize: 18,
            fontWeight: 'bolder'
          }
        },
        series: [
          {
            name: '年龄结构',
            type: 'pie',
            center: ['50%', '40%'],
            radius: ['45%', '58%'],
            startAngle: -90,
            minAngle: 5,
            label: {
              normal: { show: false },
              position: 'center',
              emphasis: {
                show: true,
                formatter: '{b}\n共{c}万人',
                fontSize: '13'
              }
            },
            labelLine: {
              emphasis: { show: true }
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
      this.$http.get(process.env.API_URL_ECHART1, { params: null }).then(res => {
        this.polar.series[0].data = res.data
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
