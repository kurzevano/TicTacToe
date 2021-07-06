<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld 
    v-bind:gm="gm"
    v-bind:gp="gp"
  />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import GameManager from './js/GameManager'
import GameParameters from './js/GameParameters'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      gm:  new GameManager(),
      gp: new GameParameters()
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
