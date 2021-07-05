<template>
  <div class="hello">
    <h1>{{ gm.status }}</h1>
    <h1>{{gm}}</h1>

          <div id='welcome' v-if='!gm.isStarted'>
        <div class='titleBlock'>
          <h1>Размер поля</h1>

          <button class='row mode' 
            @click="startGame">
            Play
          </button>
        </div>
      </div>

                <div id='welcome2' v-if='gm.isStarted'>
        <div class='titleBlock'>
          <h1>Started</h1>
        </div>
      </div>

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
    },
      methods:{
    startGame(){
       console.log(`Starting...`);
    this.gm.startGame();
    }
  }
}
</script>
