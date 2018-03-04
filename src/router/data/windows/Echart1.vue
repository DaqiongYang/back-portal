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
          formatter: '{a}<br/>{b}共{c}人'
        },
        legend: {
          x: 'center',
          y: '80%',
          data: [{ name: '0-15岁\n40%', icon: 'rect' }, { name: '16-20岁\n42%', icon: 'rect' }, { name: '60岁以上\n18%', icon: 'rect' }],
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
                formatter: '{b}\n共{c}人',
                fontSize: '13'
              }
            },
            labelLine: {
              emphasis: { show: true }
            },
            data: [
              { value: 4000, name: '0-15岁\n40%' },
              { value: 4200, name: '16-20岁\n42%' },
              { value: 1800, name: '60岁以上\n18%' }
            ]
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
