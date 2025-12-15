<template>
  <div class="game">
    <h1>Game On!</h1>
    <GameBoard />
  </div>
</template>

<script setup lang="ts">
import GameBoard from '../components/GameBoard.vue';
</script>

<style scoped>
.game {
  text-align: center;
}
</style>
