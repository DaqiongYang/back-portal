<template>
  <el-dialog :modal=false :show-close=false :visible="popDetail.visible" width="70%" center>

    <el-row class="dialog-head">
      <el-col :span="24" class="dialog-head-title">
        <span>劳动力适合及需求统计详情</span>
        <el-select v-model="selectValue1" placeholder="技工" style="width: 100px; ">
          <el-option v-for="item in selectOptions1" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="selectValue2" placeholder="适合" style="width: 100px;">
          <el-option v-for="item in selectOptions2" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <button type="button" aria-label="Close" class="dialog-head-close" @click="Invisible">
        <i class="el-icon-close"></i>
      </button>
    </el-row>
    <el-row class="dialog-body">
      <el-table style="width: 100% background: transparent ;" :data="tableData2" :row-class-name="tableRowClassName">
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="idcard" label="身份证" width="180" />
        <el-table-column prop="degree" label="学历" />
        <el-table-column prop="phone" label="电话号码" />
        <el-table-column prop="jy" label="就业情况" />
        <el-table-column prop="bf" label="帮扶领导" />
        <el-table-column prop="hxx" label="户信息" />
      </el-table>
    </el-row>
  </el-dialog>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dialog-head {
  background: #1a3787;
  height: 48px;
  color: #fff;
  padding-left: 20px;
  padding-right: 20px;
}

.dialog-head-title {
  font-size: 18px;
  margin-top: 4px;
  /* position: relative;
  top: 50%;
  transform: translateY(-50%); */
}

.dialog-head-title > span {
  margin-right: 20px;
}
.dialog-head-title > div {
  margin-left: 5px;
  margin-right: 5px;
}
.dialog-head-close {
  position: absolute;
  top: 13px;
  right: 20px;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 22px;
}
.dialog-head-close > i {
  color: #fff;
}

.dialog-body {
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;

  background: #2243a0;
  margin: 0px;
  height: 500px;
}
</style>

<script>
export default {
  name: 'pop',
  components: {
  },
  data() {
    return {
      popDetail: this.$store.state.popDetail,
      selectOptions1: [{ value: '选项1', label: '技工' }, { value: '选项2', label: '管理' }, { value: '选项3', label: '普工' }],
      selectOptions2: [{ value: '选项1', label: '适合' }, { value: '选项2', label: '有需求' }],
      selectValue1: '',
      selectValue2: '',
      tableData2: [{
        name: '赵铁柱',
        idcard: '52202199005120824',
        degree: '小学及以下',
        phone: '15462587412',
        jy: '已就业',
        bf: '胡春华',
        hxx: '成员'
      }, {
        name: '赵铁柱',
        idcard: '52202199005120824',
        degree: '小学及以下',
        phone: '15462587412',
        jy: '已就业',
        bf: '胡春华',
        hxx: '成员'
      }, {
        name: '赵铁柱',
        idcard: '52202199005120824',
        degree: '小学及以下',
        phone: '15462587412',
        jy: '已就业',
        bf: '胡春华',
        hxx: '成员'
      }]
    }
  },
  mounted() {

  },
  methods: {
    Invisible: function () {
      this.$store.commit('popDetail/invisible')
    },
    tableRowClassName({ row, rowIndex }) {
      if ((rowIndex + 1) % 2 === 1) {
        console.log('warning-row')
        return 'warning-row'
      } else {
        console.log('success-row')
        return ''
      }
    }
  }
}
</script>
