<template>

  <!-- Настройки размера поля -->
  <div class="hello">
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

  <!-- Выбор количества игроков -->
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

<!-- Процесс игры -->
      <div id='gameDiv' v-if='gm.isStarted'>
        <nav>
          <button>Пауза</button>
          <button>Выйти из игры</button>
          <div>Ходит: {{gm.currentGame.currentMove}}</div>
          <div>Таймер: _____</div>
          {{gm.currentGame}}

           <table id='board'>
          <tr v-for="row in gm.currentGame.cells" :key="row">
            <td v-for="cell in row" :key="cell.id" @click="makeMove(cell)">
              <div class='square'
                    >
                {{cell.value}}
              </div>
            </td>
          </tr>
        </table>

        </nav>
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
          type:GameParameters,
          required:true
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
      console.log(`StartingOne...`+this.gm);
      this.gp.setPlayerCount(1);
      this.startGame(this.gp);
    },
    startTwoPlayerGame(){
      this.gp.setPlayerCount(2);
      this.startGame(this.gp);
    },
    makeMove(cell){
      console.log("cell click "+Object.entries(cell)[0]);
      this.gm.currentGame.makeMove(cell);
    },
  }
}
</script>

<style src="../css/main.css"></style>
