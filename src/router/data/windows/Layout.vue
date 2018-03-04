<template>
   <div class="background-gradient">
      <div class="title">
        <img src="/static/img/title-left.png" alt="">
        &nbsp;{{ title1 }}&nbsp;
        <img src="/static/img/title-right.png" alt="">
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
                <echart1 class="panel-mid"/>
              </el-col>
            </el-col>
            
            <el-row class="hidden-sm-and-up"><el-col class="panel-mid-space-background panel-mid-space"></el-col></el-row>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="panel-mid-background">
                <echart2 class="panel-mid"/>
            </el-col>
            <el-row ><el-col class="panel-mid-space-background panel-mid-space"></el-col></el-row>
            <el-col :sm="12" :md="12" :lg="12" :xl="12"  style="padding-right: 1px;">
              <el-col class="panel-mid-background">
                <echart3 class="panel-mid"/>
              </el-col>
            </el-col>
            <el-row class="hidden-sm-and-up"><el-col class="panel-mid-space-background panel-mid-space"></el-col></el-row>
            <el-col :sm="12" :md="12" :lg="12" :xl="12" class="panel-mid-background">
              <echart4 class="panel-mid"/>
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
                <echart5 class="panel-min"/>
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
                <echart6 class="panel-min"/>
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
              <echart7 class="panel-min"/>
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
              <echart8 class="panel-min"/>
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
              <echart9 class="panel-min"/>
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
              <echart10 class="panel-max"/>
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
              <echart11 class="panel-max"/>
            </div>
          </el-col>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import echart1 from './Echart1'
import echart2 from './Echart2'
import echart3 from './Echart3'
import echart4 from './Echart4'
import echart5 from './Echart5'
import echart6 from './Echart6'
import echart7 from './Echart7'
import echart8 from './Echart8'
import echart9 from './Echart9'
import echart10 from './Echart10'
import echart11 from './Echart11'

export default {
  components: {
    echart1,
    echart2,
    echart3,
    echart4,
    echart5,
    echart6,
    echart7,
    echart8,
    echart9,
    echart10,
    echart11
  },
  props: {

  },
  data() {
    return {
      title1: '就业数据服务视窗'
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
  ); /* 渐变色标准的语法（必须放在最后） */
}
</style>
