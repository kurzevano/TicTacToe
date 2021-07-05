<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld v-bind:gm="gm"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import GameManager from './js/GameManager'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      gm:  new GameManager()
    }
    },
      mounted(){
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
