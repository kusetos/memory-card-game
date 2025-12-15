<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input type="text" v-model="name" placeholder="Enter your name" />
      <button type="submit">Play</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { usePlayerStore } from '../store/player';

const name = ref('');
const router = useRouter();
const playerStore = usePlayerStore();

const register = () => {
  if (name.value.trim()) {
    playerStore.setPlayerName(name.value);
    router.push('/game');
  }
};
</script>

<style scoped>
.register {
  text-align: center;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
input {
  padding: 10px;
  font-size: 1em;
}
button {
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
}
</style>
