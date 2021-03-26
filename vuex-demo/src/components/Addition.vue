<template>
<div>
    <!-- <h3>当前最新的count值为：{{$store.state.count}}</h3> -->
    <h3>{{$store.getters.showNum}}</h3>
    <button  @click="btnHandleClick">+1</button>
    <button  @click="btnHandleClick2">+N</button>
    <button  @click="btnHandleClick3">+1 async</button>
    <button  @click="btnHandleClick4">+N async</button>
</div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {

    btnHandleClick () {
      this.$store.commit('add')
    },
    btnHandleClick2 () {
      this.$store.commit('addN', 2)
    },
    btnHandleClick3 () {
      this.$store.dispatch('addAsync')
    },
    btnHandleClick4 () {
      this.$store.dispatch('addNAsync', 5)
    }
  }
}
</script>
