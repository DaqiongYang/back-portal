<template>
   <div class="background-gradient">
      <div class="title">
        <img src="../assets/img/title-left.png" alt="">
        &nbsp;{{ title1 }}&nbsp;
        <img src="../assets/img/title-right.png" alt="">
      </div>
      <el-row :gutter="5">
        <el-col :sm="24" :md="16" :lg="12" :xl="12">
          <el-row  class="box-wrap panel-mid-space-background" style="margin-left: 5px;margin-right: 5px;">
            <div class="horn">
              <div class="lt"></div>
              <div class="rt"></div>
              <div class="rb"></div>
              <div class="lb"></div>
            </div>
           
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12"  style="padding-right: 1px;">
              <el-col class="panel-mid-background">
              <chart :options="polar1" class="panel-mid" auto-resize></chart>
              </el-col>
            </el-col>
            
            <el-row class="hidden-sm-and-up"><el-col class="panel-mid-space-background panel-mid-space"></el-col></el-row>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="panel-mid-background">
              <chart :options="polar2" class="panel-mid" auto-resize></chart>
            </el-col>
            <el-row ><el-col class="panel-mid-space-background panel-mid-space"></el-col></el-row>
            <el-col :sm="12" :md="12" :lg="12" :xl="12"  style="padding-right: 1px;">
              <el-col class="panel-mid-background">
              <chart :options="polar3" class="panel-mid" auto-resize></chart>
              </el-col>
            </el-col>
            <el-row class="hidden-sm-and-up"><el-col class="panel-mid-space-background panel-mid-space"></el-col></el-row>
            <el-col :sm="12" :md="12" :lg="12" :xl="12" class="panel-mid-background">
              <chart :options="polar4" class="panel-mid" auto-resize></chart>
            </el-col>
          </el-row>
          <el-row class="panel-margin"/>

          <el-col :sm="12" :md="12" :lg="12" :xl="12">
            <el-col>
            <div class="panel-min box-wrap">
              <div class="horn">
                  <div class="lt"></div>
                  <div class="rt"></div>
                  <div class="rb"></div>
                  <div class="lb"></div>
              </div>
              <chart :options="polar5" class="panel-min" auto-resize></chart>
            </div>
            </el-col>
          </el-col>
          <el-row class="hidden-sm-and-up panel-margin"/>
          <el-col :sm="12" :md="12" :lg="12" :xl="12">
            <el-col>
              <div class="panel-min box-wrap">
                <div class="horn">
                    <div class="lt"></div>
                    <div class="rt"></div>
                    <div class="rb"></div>
                    <div class="lb"></div>
                </div>
                <chart :options="polar6" class="panel-min" auto-resize></chart>
              </div>
            </el-col>
          </el-col>
        </el-col>
        <el-row class="hidden-sm-and-up panel-margin"/>
        <el-col :sm="24" :md="8" :lg="6" :xl="6">
          <el-col :sm="12" :md="24" :lg="24" :xl="24">
            <div class="panel-min box-wrap">
              <div class="horn">
                  <div class="lt"></div>
                  <div class="rt"></div>
                  <div class="rb"></div>
                  <div class="lb"></div>
              </div>
              <chart :options="polar7" class="panel-min" auto-resize></chart>
            </div>
          </el-col>
          <el-row class="hidden-sm-only panel-margin"/>
          <el-col :sm="12" :md="24" :lg="24" :xl="24">
            <div class="panel-min box-wrap">
              <div class="horn">
                  <div class="lt"></div>
                  <div class="rt"></div>
                  <div class="rb"></div>
                  <div class="lb"></div>
              </div>
              <chart :options="polar8" class="panel-min" auto-resize></chart>
            </div>
          </el-col>
          <el-row class="panel-margin"/>
          <el-col :sm="12" :md="24" :lg="24" :xl="24">
            <div class="panel-min box-wrap">
              <div class="horn">
                  <div class="lt"></div>
                  <div class="rt"></div>
                  <div class="rb"></div>
                  <div class="lb"></div>
              </div>
              <chart :options="polar9" class="panel-min" auto-resize></chart>
            </div>
          </el-col>
          <el-row/>
        </el-col>
        <el-row  class="hidden-lg-and-up panel-margin"/>
        <el-col :sm="24" :md="24" :lg="6" :xl="6">
          <el-col :sm="12" :md="12" :lg="24" :xl="24">
            <div class="panel-max box-wrap">
              <div class="horn">
                  <div class="lt"></div>
                  <div class="rt"></div>
                  <div class="rb"></div>
                  <div class="lb"></div>
              </div>
              <chart :options="polar10" class="panel-max" auto-resize></chart>
            </div>
          </el-col>
          <el-row  class="hidden-sm-only hidden-md-only panel-margin"/>
          <el-col :sm="12" :md="12" :lg="24" :xl="24">
            <div class="panel-max box-wrap">
              <div class="horn">
                  <div class="lt"></div>
                  <div class="rt"></div>
                  <div class="rb"></div>
                  <div class="lb"></div>
              </div>
              <chart :options="polar11" class="panel-max" auto-resize></chart>
            </div>
          </el-col>
        </el-col>
      </el-row>
  </div>
</template>

<script>
var geoCoordMap = {
  '上海': [121.4648, 31.2891],
  '东莞': [113.8953, 22.901],
  '东营': [118.7073, 37.5513],
  '中山': [113.4229, 22.478],
  '临汾': [111.4783, 36.1615],
  '临沂': [118.3118, 35.2936],
  '丹东': [124.541, 40.4242],
  '丽水': [119.5642, 28.1854],
  '乌鲁木齐': [87.9236, 43.5883],
  '佛山': [112.8955, 23.1097],
  '保定': [115.0488, 39.0948],
  '兰州': [103.5901, 36.3043],
  '包头': [110.3467, 41.4899],
  '北京': [116.4551, 40.2539],
  '北海': [109.314, 21.6211],
  '南京': [118.8062, 31.9208],
  '南宁': [108.479, 23.1152],
  '南昌': [116.0046, 28.6633],
  '南通': [121.1023, 32.1625],
  '厦门': [118.1689, 24.6478],
  '台州': [121.1353, 28.6688],
  '合肥': [117.29, 32.0581],
  '呼和浩特': [111.4124, 40.4901],
  '咸阳': [108.4131, 34.8706],
  '哈尔滨': [127.9688, 45.368],
  '唐山': [118.4766, 39.6826],
  '嘉兴': [120.9155, 30.6354],
  '大同': [113.7854, 39.8035],
  '大连': [122.2229, 39.4409],
  '天津': [117.4219, 39.4189],
  '太原': [112.3352, 37.9413],
  '威海': [121.9482, 37.1393],
  '宁波': [121.5967, 29.6466],
  '宝鸡': [107.1826, 34.3433],
  '宿迁': [118.5535, 33.7775],
  '常州': [119.4543, 31.5582],
  '广州': [113.5107, 23.2196],
  '廊坊': [116.521, 39.0509],
  '延安': [109.1052, 36.4252],
  '张家口': [115.1477, 40.8527],
  '徐州': [117.5208, 34.3268],
  '德州': [116.6858, 37.2107],
  '惠州': [114.6204, 23.1647],
  '成都': [103.9526, 30.7617],
  '扬州': [119.4653, 32.8162],
  '承德': [117.5757, 41.4075],
  '拉萨': [91.1865, 30.1465],
  '无锡': [120.3442, 31.5527],
  '日照': [119.2786, 35.5023],
  '昆明': [102.9199, 25.4663],
  '杭州': [119.5313, 29.8773],
  '枣庄': [117.323, 34.8926],
  '柳州': [109.3799, 24.9774],
  '株洲': [113.5327, 27.0319],
  '武汉': [114.3896, 30.6628],
  '汕头': [117.1692, 23.3405],
  '江门': [112.6318, 22.1484],
  '沈阳': [123.1238, 42.1216],
  '沧州': [116.8286, 38.2104],
  '河源': [114.917, 23.9722],
  '泉州': [118.3228, 25.1147],
  '泰安': [117.0264, 36.0516],
  '泰州': [120.0586, 32.5525],
  '济南': [117.1582, 36.8701],
  '济宁': [116.8286, 35.3375],
  '海口': [110.3893, 19.8516],
  '淄博': [118.0371, 36.6064],
  '淮安': [118.927, 33.4039],
  '深圳': [114.5435, 22.5439],
  '清远': [112.9175, 24.3292],
  '温州': [120.498, 27.8119],
  '渭南': [109.7864, 35.0299],
  '湖州': [119.8608, 30.7782],
  '湘潭': [112.5439, 27.7075],
  '滨州': [117.8174, 37.4963],
  '潍坊': [119.0918, 36.524],
  '烟台': [120.7397, 37.5128],
  '玉溪': [101.9312, 23.8898],
  '珠海': [113.7305, 22.1155],
  '盐城': [120.2234, 33.5577],
  '盘锦': [121.9482, 41.0449],
  '石家庄': [114.4995, 38.1006],
  '福州': [119.4543, 25.9222],
  '秦皇岛': [119.2126, 40.0232],
  '绍兴': [120.564, 29.7565],
  '聊城': [115.9167, 36.4032],
  '肇庆': [112.1265, 23.5822],
  '舟山': [122.2559, 30.2234],
  '苏州': [120.6519, 31.3989],
  '莱芜': [117.6526, 36.2714],
  '菏泽': [115.6201, 35.2057],
  '营口': [122.4316, 40.4297],
  '葫芦岛': [120.1575, 40.578],
  '衡水': [115.8838, 37.7161],
  '衢州': [118.6853, 28.8666],
  '西宁': [101.4038, 36.8207],
  '西安': [109.1162, 34.2004],
  '贵阳': [106.6992, 26.7682],
  '连云港': [119.1248, 34.552],
  '邢台': [114.8071, 37.2821],
  '邯郸': [114.4775, 36.535],
  '郑州': [113.4668, 34.6234],
  '鄂尔多斯': [108.9734, 39.2487],
  '重庆': [107.7539, 30.1904],
  '金华': [120.0037, 29.1028],
  '铜川': [109.0393, 35.1947],
  '银川': [106.3586, 38.1775],
  '镇江': [119.4763, 31.9702],
  '长春': [125.8154, 44.2584],
  '长沙': [113.0823, 28.2568],
  '长治': [112.8625, 36.4746],
  '阳泉': [113.4778, 38.0951],
  '青岛': [120.4651, 36.3373],
  '韶关': [113.7964, 24.7028]
}
var BJData = [
  [{ name: '贵阳' }, { name: '广州', value: 98 }],
  [{ name: '贵阳' }, { name: '北京', value: 85 }],
  [{ name: '贵阳' }, { name: '上海', value: 78 }],
  [{ name: '贵阳' }, { name: '昆明', value: 75 }],
  [{ name: '贵阳' }, { name: '福州', value: 70 }],
  [{ name: '贵阳' }, { name: '成都', value: 60 }],
  [{ name: '贵阳' }, { name: '济南', value: 50 }],
  [{ name: '贵阳' }, { name: '合肥', value: 45 }],
  [{ name: '贵阳' }, { name: '北海', value: 30 }],
  [{ name: '贵阳' }, { name: '海口', value: 20 }],
  [{ name: '贵阳' }, { name: '长春', value: 10 }]
]
var convertData = function (data) {
  var res = []
  for (var i = 0; i < data.length; i++) {
    var dataItem = data[i]
    var fromCoord = geoCoordMap[dataItem[0].name]
    var toCoord = geoCoordMap[dataItem[1].name]
    if (fromCoord && toCoord) {
      res.push([{
        coord: fromCoord
      }, {
        coord: toCoord,
        value: dataItem[1].value
      }])
    }
  }
  return res
}

var series = [];
[
  ['贵阳', BJData]
].forEach(function (item, i) {
  series.push(
    {
      type: 'lines',
      zlevel: 2,
      effect: {
        show: true,
        constantSpeed: 30,
        trailLength: 0.02,
        symbol: 'arrow',
        symbolSize: 4
      },
      lineStyle: {
        normal: {
          width: 1,
          opacity: 0.6,
          curveness: 0.2
        }
      },

      data: convertData(item[1])
    }, {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {

        period: 4,
        brushType: 'stroke',
        scale: 4
      },
      label: {
        normal: {
          show: true,
          position: 'right',
          offset: [5, 0],
          formatter: '{b}'
        },
        emphasis: {
          show: true
        }
      },
      symbol: 'circle',
      symbolSize: function (val) {
        return 4
      },
      itemStyle: {
        normal: {
          show: false,
          color: '#f00'
        }
      },
      data: item[1].map(function (dataItem) {
        return {
          name: dataItem[1].name,
          value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
        }
      })
    },
    // 目的地
    {
      type: 'scatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
        period: 4,
        brushType: 'stroke',
        scale: 4
      },
      label: {
        normal: {
          show: true,
          position: 'right',
          // offset:[5, 0],
          color: '#00ffff',
          formatter: '{b}',
          textStyle: {
            color: '#00ffff'
          }
        },
        emphasis: {
          show: true
        }
      },
      symbol: 'circle',
      symbolSize: 10,
      itemStyle: {
        normal: {
          show: true,
          color: '#9966cc'
        }
      },
      data: [{
        name: item[0],
        value: geoCoordMap[item[0]].concat([100])
      }]
    }
  )
})

export default {
  components: {

  },

  props: {

  },

  data() {
    return {
      title1: '就业数据服务视窗',
      polar1: {
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
      },

      polar2: {
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
      },
      polar3: {
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
      },
      polar4: {
        color: ['#3BB4E5', '#C3505D', '#43D3FF'],
        tooltip: {},
        title: [
          {
            text: '劳动力性别结构',
            x: '8%',
            y: '8%',
            textStyle: {
              fontSize: 18,
              fontWeight: 'bolder',
              color: '#2eccf4'
            }
          },
          {
            text: '劳动力年龄别结构',
            x: '8%',
            y: '40%',
            textStyle: {
              fontSize: 18,
              fontWeight: 'bolder',
              color: '#2eccf4'
            }
          }
        ],
        xAxis: [
          {
            show: false,
            gridIndex: 0,
            type: 'value'
          },
          {
            show: false,
            gridIndex: 1,
            type: 'value'
          }
        ],
        yAxis: [
          {
            show: false,
            type: 'category',
            gridIndex: 0
          },
          {
            type: 'category',
            gridIndex: 1,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              color: '#87baf8'
            },
            data: ['16-36岁', '36-50岁', '51-60岁']
          }
        ],
        grid: [
          {
            top: '11%',
            bottom: '75%',
            right: '45%',
            left: '25%'
          },
          {
            top: '50%',
            bottom: '5%',
            left: '25%'
          }
        ],
        series: [
          // These series are in the first grid.
          { type: 'bar', seriesLayoutBy: 'row' },
          {
            name: '男',
            type: 'bar',
            stack: '堆叠条形图',
            label: {
              normal: {
                show: true,
                formatter: '{a}:{c}万',
                position: 'left'
              }
            },
            data: [490]
          },
          {
            name: '女',
            type: 'bar',
            stack: '堆叠条形图',
            label: {
              normal: {
                show: true,
                formatter: '{a}:{c}万',
                position: 'right'
              }
            },
            data: [308]
          },
          // These series are in the second grid.
          {
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            barWidth: '34%',
            label: {
              normal: {
                show: true,
                formatter: '{c}万',
                position: 'right'
              }
            },
            data: [620, 468, 82]
          }
        ]
      },
      polar5: {
        color: ['#DE9B32', '#43D3FF'],
        title: [
          {
            text: '劳动力适合及需求统计',
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
            x: '72%',
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
          data: ['适合', '有需求'],
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'axis',
          formatter: '{b}<br/> {a0}:{c0}万<br/>{a1}:{c1}万',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: [
          {
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
            data: ['技工', '管理', '普工']
          }
        ],
        yAxis: [
          {
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
          }
        ],
        series: [
          {
            name: '适合',
            type: 'bar',
            arGap: 0,
            label: {
              normal: {
                show: true,
                formatter: '{c0}万',
                fontSize: 12,
                rotate: 0,
                align: 'center',
                verticalAlign: 'middle',
                position: 'top',
                distance: 10
              }
            },
            data: [19, 16, 130]
          },
          {
            name: '有需求',
            type: 'bar',
            label: {
              normal: {
                show: true,
                formatter: '{c0}万',
                fontSize: 12,
                rotate: 0,
                align: 'center',
                verticalAlign: 'middle',
                position: 'top',
                distance: 10
              }
            },
            data: [25, 22, 187]
          }
        ]
      },
      polar6: {
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
            color: '#87baf8'
          },
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
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
            data: [15800, 12000, 10000, 8000, 7000, 7300, 6500, 6000, 5500, 5000, 4500, 3000]
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
            data: [4800, 4000, 3500, 3800, 5000, 3700, 3000, 2800, 2500, 2000, 1000, 500]
          }
        ]
      },
      polar7: {
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
      },
      polar8: {
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
      },
      polar9: {
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
      },
      polar10: {
        visualMap: {
          min: 0,
          max: 100,
          text: ['高', '低'],
          calculable: true,
          color: ['#D65869', 'orange', 'yellow', 'lime', 'aqua'],
          textStyle: {
            color: '#fff'
          }
        },
        geo: {
          map: 'china',
          left: 0,
          right: 0,
          top: '15%',
          silent: true,
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#0f3478',
              borderColor: '#0969b2'
            },
            emphasis: {
              areaColor: '#2a333d'
            }
          }
        },

        series: series
      },
      polar11: {
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
          data: ['河北', '辽宁', '天津', '江苏', '北京', '上海', '广东', '浙江']
        },
        series: [
          {
            data: [152, 221, 318, 380, 425, 534, 689, 765],
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

  computed: {

  },

  watch: {

  },

  created() {

  },

  mounted() {

  },

  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.echarts {
  width: auto;
  height: auto;
  z-index: 999;
}
.panel-margin {
  margin-bottom: 10px;
  z-index: -1;
}
.panel-mid-space {
  height: 1px;
}
.panel-mid-space-background {
  background: #1d4492;
}
.panel-mid-background {
  background: #193788;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2eccf4;
  font-size: 28px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 30px;
}
.title > img {
  height: 40px;
  margin-top: 5px;
}
.panel-min {
  background-color: #193788;
  height: 300px;
}
.panel-mid {
  background-color: #193788;
  height: 304.5px;
}
.panel-max {
  background-color: #193788;
  height: 455px;
}

.box-wrap {
  position: relative;
}
.horn {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 0px solid #49d9fe;
}
.horn > div {
  width: 15px;
  height: 15px;
  position: absolute;
}
.horn .lt {
  border-top: 2px solid #2d79b3;
  border-left: 2px solid #2d79b3;
  left: -2px;
  top: -2px;
}
.horn .rt {
  border-top: 2px solid #2d79b3;
  border-right: 2px solid #2d79b3;
  right: -2px;
  top: -2px;
}
.horn .rb {
  border-bottom: 2px solid #2d79b3;
  border-right: 2px solid #2d79b3;
  right: -2px;
  bottom: -2px;
}
.horn .lb {
  border-bottom: 2px solid #2d79b3;
  border-left: 2px solid #2d79b3;
  left: -2px;
  bottom: -2px;
}

.background-gradient {
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 7.25px;
  padding-bottom: 20px;
  background: -webkit-linear-gradient(#152988, #15286c); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#152988, #15286c); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#152988, #15286c); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    #152988,
    #15286c
  ); /* 标准的语法（必须放在最后） */
}
</style>
