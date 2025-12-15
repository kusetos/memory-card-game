<template>
  <div class="game-stats">
    <span>Moves: {{ store.moves }}</span>
    <span>Time: {{ store.time }}s</span>
  </div>
  <div v-if="store.gameWon" class="game-won">
    <h2>Congratulations, {{ playerStore.name }}!</h2>
    <p>You won in {{ store.moves }} moves and {{ store.time }} seconds.</p>
    <button @click="restartGame">Play Again</button>
  </div>
  <div class="game-board">
    <Card 
      v-for="(card, index) in store.cards" 
      :key="index" 
      :value="card.value" 
      :flipped="card.flipped" 
      :matched="card.matched"
      @flip="flipCard(card)" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import Card from './Card.vue';
import { useGameStore } from '../store/game';
import { usePlayerStore } from '../store/player';
import { useLeaderboardStore } from '../store/leaderboard';

// Initialize stores
const store = useGameStore();
const playerStore = usePlayerStore();
const leaderboardStore = useLeaderboardStore();

// Keep track of the currently flipped cards
const flippedCards = ref<any[]>([]);

// Initialize the game when the component is mounted
onMounted(() => {
  store.initializeGame();
});

// Watch for the game to be won
watch(() => store.gameWon, (gameWon) => {
  if (gameWon) {
    // Add the score to the leaderboard
    leaderboardStore.addScore({
      name: playerStore.name,
      moves: store.moves,
      time: store.time,
    });
  }
});

// Flip a card
const flipCard = (card: any) => {
  // Only allow flipping if less than 2 cards are flipped and the card is not already flipped
  if (flippedCards.value.length < 2 && !card.flipped) {
    store.flipCard(card);
    flippedCards.value.push(card);

    // If two cards are flipped, check for a match
    if (flippedCards.value.length === 2) {
      store.incrementMoves();
      setTimeout(() => {
        checkForMatch();
      }, 500);
    }
  }
};

// Check if the two flipped cards match
const checkForMatch = () => {
  const [card1, card2] = flippedCards.value;
  if (card1.value === card2.value) {
    store.matchCards(card1, card2);
  } else {
    store.mismatchCards(card1, card2);
  }
  // Reset the flipped cards
  flippedCards.value = [];
};

// Restart the game
const restartGame = () => {
  store.initializeGame();
};

</script>

<style scoped>
.game-board {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
}

.game-stats {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 30px;
  font-size: 1.5em;
}

.game-won {
  text-align: center;
  margin-bottom: 20px;
}

.game-won h2 {
  font-size: 2em;
  margin-bottom: 10px;
}
</style>
