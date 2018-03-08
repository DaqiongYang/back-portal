// 包含了全部的应用层级状态，全局访问 this.$store.state.popDetail.visible
// 虽然将所有的状态放到Vuex会使状态变化更易显示和易调试，但也会使代码变得冗长和不直观。
// 如果有些状态严格属于单个组件，最好还是作为组件的本地状态。
const state = {
  visible: false,
  echartName: null,
  seriesName: null,
  categoryName: null,
  data: null
}

// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
// mutation 必须是同步函数
// 全局访问 this.$store.commit('popDetail/set', value)
const mutations = {
  set: (state, payload) => {
    state.visible = payload.visible
    state.echartName = payload.echartName
    state.seriesName = payload.seriesName
    state.categoryName = payload.categoryName
    state.data = payload.data
  },
  invisible: (state) => {
    state.visible = false
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
