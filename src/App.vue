<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/bg-desktop-light.jpg">
    <PageTitle :title="getPageTitle" />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import HelloWorld from './components/HelloWorld.vue'
import PageTitle from './components/Page/PageTitle.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    PageTitle
  },
  computed: {
    ...mapGetters(['getPageTitle'])
  }

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
