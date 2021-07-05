<template>
  <div class="hello">
    <h1>{{ gm.status }}</h1>
    <h1>{{gm}}</h1>
  </div>
</template>

<script>
import GameManager from '../js/GameManager'
export default {
  name: 'HelloWorld',
   props:
    {
        gm:{
            type:GameManager,
            required:true
        }
    }
}
</script>
