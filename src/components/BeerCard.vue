<template>
  <div class="w-96 bg-blue-900 rounded-xl p-10">
    <img
      :src="
        beer.image_url
          ? beer.image_url
          : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
      "
      alt="beer_img"
      class="h-80 mx-auto mb-5"
    />

    <div class="text-white">
      <p class="font-bold text-2xl">{{ beer.name }}</p>
      <p class="font-thin text-xl italic mb-3">{{ beer.tagline }}</p>
      <p>{{ beer.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({ beer: { type: Object, required: true } });
</script>

<style></style>
