<template>
  <div class="mt-20">
    <button
      class="mb-10 bg-green-500 px-10 py-3 text-white font-bold rounded-lg"
      @click="getBeer"
    >
      Get beer
    </button>
    <div
      v-if="requestStatus === 'IDLE'"
      class="text-3xl mt-20 text-black text-bold"
    >
      Hey! Get a free beer 🍺
    </div>
    <div v-if="requestStatus === 'PENDING'" class="text-white font-bold mt-20">
      <p class="animate-spin bg-green-500 mx-auto w-20 h-20 pt-7 rounded-full">
        Loading
      </p>
    </div>
    <div
      v-if="requestStatus === 'ERROR'"
      class="text-red-700 font-bold animate-bounce mt-20"
    >
      {{ errorMessage }}
    </div>
    <div
      v-if="requestStatus === 'SUCCESS'"
      class="flex justify-center align-center"
    >
      <beer-card :beer="beer" v-for="beer in beers" :key="beer.id" />
    </div>
  </div>
</template>

<script setup>
import services from "../services";
import BeerCard from "./BeerCard.vue";
import { ref } from "vue";
const beers = ref([]);
const requestStatus = ref("IDLE");
const errorMessage = ref("");
const getBeer = async () => {
  try {
    requestStatus.value = "PENDING";
    const data = await services.beers.getRandomBeer();
    beers.value = data;
    requestStatus.value = "SUCCESS";
  } catch (err) {
    console.log(err.message);
    requestStatus.value = "ERROR";
    errorMessage.value = err.message;
  }
};
</script>
