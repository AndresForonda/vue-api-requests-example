<template>
  <div class="text-red-700 font-bold animate-bounce mt-20">
    {{ errorMessage }}
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  errorMessage: {
    type: String,
    default: "",
  },
});
</script>

<style></style>
