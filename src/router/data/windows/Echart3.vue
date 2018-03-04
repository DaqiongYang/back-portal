<template>
<chart :options="polar" auto-resize></chart>
</template>

<script>
export default {
  data() {
    return {
      polar: {
        color: ['#81A56B', '#A4812F', '#20A594', '#A14B64'],
        tooltip: {
          trigger: 'item',
          formatter: '{a}<br/>{b}'
        },
        legend: {
          x: 'center',
          y: '80%',
          data: [
            { name: '小学及以下\n23.3%', icon: 'rect' },
            { name: '初中\n58%', icon: 'rect' },
            { name: '高中\n11.1%', icon: 'rect' },
            { name: '大专及以上\n7.6%', icon: 'rect' }
          ],
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
            text: '就业文化比例',
            textAlign: 'center',
            fill: '#2eccf4',
            fontSize: 18,
            fontWeight: 'bolder'
          }
        },
        series: [
          {
            name: '就业文化比例',
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
              { value: 233000, name: '小学及以下\n23.3%' },
              { value: 580000, name: '初中\n58%' },
              { value: 111000, name: '高中\n11.1%' },
              { value: 76000, name: '大专及以上\n7.6%' }
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
