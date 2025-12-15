import { defineStore } from 'pinia';

// Define the game store
export const useGameStore = defineStore('game', {
  state: () => ({
    cards: [] as any[],
    moves: 0,
    time: 0,
    gameWon: false,
    timer: null as any,
  }),
  actions: {
    // Initialize the game
    initializeGame() {
      // Create the cards
      const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
      const cards = [...values, ...values].map((value, index) => ({
        id: index,
        value,
        flipped: false,
        matched: false,
      }));

      // Shuffle the cards
      cards.sort(() => Math.random() - 0.5);

      // Reset the state
      this.cards = cards;
      this.moves = 0;
      this.time = 0;
      this.gameWon = false;

      // Start the timer
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = setInterval(() => {
        this.time++;
      }, 1000);
    },
    // Flip a card
    flipCard(card: any) {
      const cardToFlip = this.cards.find((c) => c.id === card.id);
      if (cardToFlip) {
        cardToFlip.flipped = true;
      }
    },
    // Increment the moves
    incrementMoves() {
      this.moves++;
    },
    // Match two cards
    matchCards(card1: any, card2: any) {
      const cardToMatch1 = this.cards.find((c) => c.id === card1.id);
      const cardToMatch2 = this.cards.find((c) => c.id === card2.id);
      if (cardToMatch1 && cardToMatch2) {
        cardToMatch1.matched = true;
        cardToMatch2.matched = true;
      }
      // Check if the game is won
      this.checkGameWon();
    },
    // Mismatch two cards
    mismatchCards(card1: any, card2: any) {
      const cardToMismatch1 = this.cards.find((c) => c.id === card1.id);
      const cardToMismatch2 = this.cards.find((c) => c.id === card2.id);
      if (cardToMismatch1 && cardToMismatch2) {
        cardToMismatch1.flipped = false;
        cardToMismatch2.flipped = false;
      }
    },
    // Check if the game is won
    checkGameWon() {
      if (this.cards.every((card) => card.matched)) {
        this.gameWon = true;
        clearInterval(this.timer);
      }
    },
  },
});
