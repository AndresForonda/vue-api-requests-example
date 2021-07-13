<template>
  <div class="text-3xl mt-20 text-black text-bold">
    {{ idleText }}
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  idleText: {
    type: String,
    default: "",
  },
});
</script>

<style></style>
