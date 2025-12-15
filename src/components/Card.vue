<template>
  <div class="card" :class="{ flipped: flipped, matched: matched }" @click="onClick">
    <div class="card-inner">
      <div class="card-front">
        ?
      </div>
      <div class="card-back">
        {{ value }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ 
  value: string, 
  flipped: boolean, 
  matched: boolean 
}>();

const emit = defineEmits(['flip']);

const onClick = () => {
  if (!props.flipped) {
    emit('flip');
  }
};
</script>

<style scoped>
.card {
  width: 100px;
  height: 100px;
  perspective: 1000px;
  cursor: pointer;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.2s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.card.flipped .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.card-front {
  background-color: #f0f0f0;
}

.card-back {
  background-color: #e0e0e0;
  transform: rotateY(180deg);
}

.card.matched .card-inner {
  visibility: hidden;
}
</style>
