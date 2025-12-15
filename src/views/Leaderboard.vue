<template>
  <div class="leaderboard">
    <h1>Leaderboard</h1>
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Moves</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(score, index) in leaderboard" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ score.name }}</td>
          <td>{{ score.moves }}</td>
          <td>{{ score.time }}s</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useLeaderboardStore } from '../store/leaderboard';

const leaderboardStore = useLeaderboardStore();
const leaderboard = ref(leaderboardStore.leaderboard);

onMounted(() => {
  leaderboardStore.fetchLeaderboard();
});
</script>

<style scoped>
.leaderboard {
  text-align: center;
}

table {
  width: 80%;
  margin: 20px auto;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
