<template>
  <div class="home">
    <h1>Welcome to the Concentration Game!</h1>
    <p>Test your memory with this classic card game.</p>
    <h2>How to Play</h2>
    <ol>
      <li>Click on a card to flip it over.</li>
      <li>Find its matching pair.</li>
      <li>If the cards match, they will be removed from the board.</li>
      <li>If they don't match, they will be flipped back over.</li>
      <li>The game is over when all the cards have been matched.</li>
    </ol>
    <router-link to="/register" class="play-button">Play Now</router-link>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.home {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

ol {
  text-align: left;
  display: inline-block;
  margin-bottom: 30px;
}

.play-button {
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 15px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2em;
  transition: background-color 0.3s;
}

.play-button:hover {
  background-color: #36a374;
}
</style>
