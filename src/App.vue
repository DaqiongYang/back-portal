<template>
  <div id="app">
    <div class="text-center">
      <img src="./assets/img/logo.png">
      <h1>{{ msg }}</h1>
    </div>

    <el-tabs  v-model="activeLink" @tab-click="handleClick">
      <el-tab-pane
        :key="link"
        v-for="link in links"
        :label="link"
        :name="link"
      >
      </el-tab-pane>
    </el-tabs>

    <transition mode="out-in" name="fade">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',

  data() {
    // console.log('1', this.$route)
    console.log('1', this.$route.path)
    console.log('1', this.$route.fullPath)
    return {
      activeLink: 'Build',
      msg: 'Vue Front-end Tempate',
      links: ['Home', 'Build', 'Icon', 'ElementUI', '404']
    }
  },
  mounted() {
    // console.log('3', this.$route)
    console.log('3', this.$route.path)
    console.log('3', this.$route.fullPath)
  },
  created() {
    // console.log('2', this.$route)
    console.log('2', this.$route.path)
    console.log('2', this.$route.fullPath)
  },
  watch: {
    '$route'(to, from) {
      console.log('to:', to.path.replace(/^\//g, ''))
      console.log('from:', from.path.replace(/^\//g, ''))
      this.activeLink=to.path.replace(/^\//g, '')
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab.name, event)
      this.$router.push(`/${tab.name}`)
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
