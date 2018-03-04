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
          formatter: '{a}<br/>{b}'
        },
        legend: {
          x: 'center',
          y: '80%',
          data: [{ name: '外省就业\n52.8% 618万', icon: 'rect' }, { name: '省内就业\n23.2% 272万', icon: 'rect' }, { name: '未就业\n23.9% 280万', icon: 'rect' }],
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
            text: '就业比例',
            textAlign: 'center',
            fill: '#2eccf4',
            fontSize: 18,
            fontWeight: 'bolder'
          }
        },
        series: [
          {
            name: '就业比例',
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
              { value: 6180000, name: '外省就业\n52.8% 618万' },
              { value: 2720000, name: '省内就业\n23.2% 272万' },
              { value: 2800000, name: '未就业\n23.9% 280万' }
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
