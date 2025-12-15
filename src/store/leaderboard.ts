import { defineStore } from 'pinia';

interface Score {
  name: string;
  moves: number;
  time: number;
}

export const useLeaderboardStore = defineStore('leaderboard', {
  state: () => ({
    leaderboard: [] as Score[],
  }),
  actions: {
    fetchLeaderboard() {
      // In a real application, you would fetch this from an API
      this.leaderboard = [
        { name: 'Alice', moves: 20, time: 60 },
        { name: 'Bob', moves: 25, time: 75 },
        { name: 'Charlie', moves: 30, time: 90 },
      ].sort((a, b) => a.moves - b.moves || a.time - b.time);
    },
    addScore(score: Score) {
      this.leaderboard.push(score);
      this.leaderboard.sort((a, b) => a.moves - b.moves || a.time - b.time);
    },
  },
});
