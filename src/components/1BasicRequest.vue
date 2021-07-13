<template>
  <div class="mt-20">
    <button
      class="mb-10 bg-green-500 px-10 py-3 text-white font-bold rounded-lg"
      @click="getBeer"
    >
      Get beer
    </button>
    <div class="flex justify-center align-center">
      <beer-card :beer="beer" v-for="beer in beers" :key="beer.id" />
    </div>
  </div>
</template>

<script setup>
import BeerCard from "./BeerCard.vue";
import { ref } from "vue";
const beers = ref([]);
const getBeer = async () => {
  const data = await fetch("https://api.punkapi.com/v2/beers/random");
  const json = await data.json();
  beers.value = json;
};
</script>
