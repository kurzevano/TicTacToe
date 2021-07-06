<template>
  <div class="hello">
    <h1>{{ gm.status }}</h1>
    <h1>{{gm}}</h1>

          <div id='divSelectSize' v-if='!gm.isStarted && !gp.isFieldSizeSelected'>
        <div class='titleBlock'>
          <h1>Размер поля</h1>

          <div v-for="size of gm.getFieldSizes"
          :key="size">
            {{size}} x {{size}}
          </div>

          <select id="sizeSelect" class="size-select">
            <option v-for="size in gp.getFieldSizes" :key="size" :value="size" >
              {{size}} x {{size}}
            </option>
          </select>

          <button class='row mode' 
            @click="selectFieldSize">
            Play
          </button>
        </div>
      </div>

      <div id='divSelectPlayers' v-if='!gm.isStarted && gp.isFieldSizeSelected'>
          <button 
            @click="startOnePlayerGame">
            1 игрок
          </button>

          <button 
            @click="startTwoPlayerGame">
            2 игрока
          </button>
        </div>
      </div>

                <div id='welcome2' v-if='gm.isStarted'>
        <div class='titleBlock'>
          <h1>Started</h1>
        </div>
      </div>

</template>

<script>
import GameManager from '../js/GameManager'
import GameParameters from '../js/GameParameters'
export default {
  name: 'HelloWorld',
   props:
    {
        gm:{
            type:GameManager,
            required:true
        }, 
        gp:{
          type:GameParameters
        }
    },
      methods:{
    startGame(gp){
       console.log(`Starting...`+gp);
    this.gm.startGame(gp);
    },
    selectFieldSize(){
      let value = document.getElementById("sizeSelect").value;
      this.gp.setSelectedSize(value);
      console.log(this.gm.isStarted + "---" + this.gp.isFieldSizeSelected);
    },
    startOnePlayerGame(){
      console.log(`StartingOne...`+this.gm[0]);
      this.gp.setPlayerCount(1);
      this.startGame(this.gp);
    },
    startTwoPlayerGame(){
      this.gp.setPlayerCount(2);
      this.startGame(this.gp);
    },
  }
}
</script>
