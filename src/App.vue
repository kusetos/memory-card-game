<template>
  <header>
    <div class="header-top">
      <h1>Concentration Game</h1>
      <div class="time-display">{{ currentTime }}</div>
    </div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/game">Game</router-link>
      <router-link to="/leaderboard">Leaderboard</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const currentTime = ref('');
let timer: number;

const updateTime = () => {
  fetch('http://worldtimeapi.org/api/ip')
    .then(response => response.json())
    .then(data => {
      const datetime = new Date(data.datetime);
      currentTime.value = datetime.toLocaleTimeString();
    })
    .catch(() => {
      // Fallback to local time if API fails
      const now = new Date();
      currentTime.value = now.toLocaleTimeString();
    });
};

onMounted(() => {
  updateTime();
  timer = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style scoped>
header {
  background-color: var(--secondary-color);
  color: white;
  padding: 20px;
  text-align: center;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  margin: 0 auto 15px;
}

nav a {
  margin: 0 15px;
}
</style>
