import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('player', {
  state: () => ({
    name: 'Guest',
  }),
  actions: {
    setPlayerName(name: string) {
      this.name = name;
    },
  },
});
