<template>
  <div class="error-page">
    <div class="container text-center" style="padding-top: 5em;">
      <div class="row">
        <div class="col-sm-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
          <img src="static/img/404.png" alt="" class="img-responsive">
        </div>
      </div>
      <p style="margin: 20px 0;">啊哦~ 一不小心闯进了未知领域，请点击下面按钮返回首页……</p>
      <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
      <el-button @click="$router.back()" class="btn-lg">返回上一页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {

  },
  data() {
    return {

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

<style scoped>

</style>
