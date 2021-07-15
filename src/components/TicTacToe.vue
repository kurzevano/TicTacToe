<template>

  <!-- Настройки размера поля -->
  <div class="center-div hello">
    <div id='divSelectSize' v-if='!gm.isStarted && !gp.isFieldSizeSelected'>
      <div class='titleBlock stretchHorDiv'>
        <h1>Размер поля</h1>
        <div class="stretcVertDiv">
          <select id="sizeSelect" class="size-select">
            <option v-for="size in gp.getFieldSizes" :key="size" :value="size" >
              {{size}} x {{size}}
            </option>
          </select>

          <button class='row mode' 
          type="button"
            @click="selectFieldSize">
            Играть
          </button>

        </div>
        </div>
      </div>

  <!-- Выбор количества игроков -->
      <div class='center-div divSelectPlayers' v-if='!gm.isStarted && gp.isFieldSizeSelected'>
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
      <div center-div class='center-div gameDiv' v-if='gm.isStarted'>
        <nav>
          <button disabled>Пауза</button>
          <button @click="goToStart">Выйти из игры</button>
        </nav>
          <div>Ходит: {{gm.currentGame.currentMove}}</div>

           <table class='board'>
          <tr v-for="row in gm.currentGame.cells" :key="row">
            <td v-for="cell in row" :key="cell.id" @click="makeMove(cell)">
              <div class='square'
              v-bind:class="{isWin: cell.isWin, isFail: cell.isFail}"
                    >
                {{cell.value}}
              </div>
            </td>
          </tr>
        </table>
      </div>

      <!-- Окно окончания игры   -->
      <div class='center-div gameOverDiv' v-if='gm.isStarted && gm.currentGame.isOver'>
        <h1>Игра окончена. Играть ещё?</h1>
        <div>
        <button @click="goToStart">Нет, спасибо</button>
        <button @click="restartGame">Да, начать новую игру</button>
        </div>
      </div>

</template>

<script>
import GameManager from '../js/GameManager'
import GameParameters from '../js/GameParameters'
export default {
  name: 'TicTacToe',
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
          this.gm.startGame(gp);
        },
        goToStart(gp){
          this.gm.setNull(gp);
          this.gp.setNull();
        },
        restartGame(gp){
          this.gm.restartGame(gp);
        },
        selectFieldSize(){
          let value = document.getElementById("sizeSelect").value;
          this.gp.setSelectedSize(value);
        },
    startOnePlayerGame(){
      this.gp.setPlayerCount(1);
      this.startGame(this.gp);
    },
    startTwoPlayerGame(){
      this.gp.setPlayerCount(2);
      this.startGame(this.gp);
    },
    makeMove(cell){
      this.gm.currentGame.makeMove(cell);
    },
  }
}
</script>

<style src="../css/main.css"></style>
