<template>
  <div class="mt-20">
    <button
      class="mb-10 bg-green-500 px-10 py-3 text-white font-bold rounded-lg"
      @click="getBeer"
    >
      Get beer
    </button>
    <div v-if="loading" class="text-white font-bold mt-20">
      <p class="animate-spin bg-green-500 mx-auto w-20 h-20 pt-7 rounded-full">
        Loading
      </p>
    </div>
    <div v-if="error" class="text-red-700 font-bold animate-bounce mt-20">
      {{ errorMessage }}
    </div>
    <div v-if="!loading && !error" class="flex justify-center align-center">
      <beer-card :beer="beer" v-for="beer in beers" :key="beer.id" />
    </div>
  </div>
</template>

<script setup>
import BeerCard from "./BeerCard.vue";
import { ref } from "vue";
const beers = ref([]);

const loading = ref(false);
const error = ref(false);

const errorMessage = ref("");

const getBeer = async () => {
  try {
    loading.value = true;
    const data = await fetch("https://api.punkapi.com/v2/beers/random");
    const json = await data.json();
    beers.value = json;
    setError(false, "");
  } catch (err) {
    console.log(err.message);
    setError(true, err.message);
  } finally {
    loading.value = false;
  }
};
const setError = (err, message) => {
  error.value = err;
  errorMessage.value = message;
};
</script>
