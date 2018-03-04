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
          data: ['贵阳', '六盘水', '黔西南', '毕节', '黔东南', '黔南', '遵义', '安顺', '铜仁']
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
          data: [18200, 37700, 69300, 12500, 91700, 145600, 62100, 92404, 149760],
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
  }
}
</script>

<style scoped>
.echarts {
  width: auto;
  z-index: 999;
}
</style>
