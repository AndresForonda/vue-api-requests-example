<template>
  <div class="mt-20">
    <button
      class="mb-10 bg-green-500 px-10 py-3 text-white font-bold rounded-lg"
      @click="getRandomDog"
    >
      Get a random friend!
    </button>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Get some friends by breed
      </label>
      <input
        class="
          shadow
          appearance-none
          border
          rounded
          w-56
          py-2
          px-3
          mr-2
          text-gray-700
          leading-tight
          focus:outline-none focus:shadow-outline
        "
        placeholder="Breed"
        v-model="breed"
      />
      <button
        class="
          mb-10
          bg-green-500
          px-10
          py-2
          ml-2
          text-white
          font-bold
          rounded-lg
        "
        @click="getDogByBreed"
      >
        Get some friends by Breed
      </button>
    </div>
    <idle
      v-if="requestStatus === apiStatus.IDLE"
      idle-text="Hey! come and meet some 🐶"
    />
    <loading v-if="requestStatus === apiStatus.PENDING" />
    <error
      v-if="requestStatus === apiStatus.ERROR"
      :error-message="errorMessage"
    />
    <div
      v-if="requestStatus === apiStatus.SUCCESS"
      class="animate-bounce mt-5 text-5xl"
    >
      🥺
    </div>
    <div
      v-if="requestStatus === apiStatus.SUCCESS"
      class="flex justify-center align-center w-auto"
    >
      <div class="pb-20">
        <img
          class="mx-auto mb-4 h-96"
          v-for="imageUrl of imageUrls"
          :key="imageUrl"
          :src="imageUrl"
          :alt="imageUrl"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import services from "../services";
import { ref } from "vue";
import { withAsync } from "../helpers/withAsync";
import { apiStatus } from "../api/constans/apiStatus";
import Loading from "./Loading.vue";
import Error from "./Error.vue";
import Idle from "./Idle.vue";

const breed = ref("");
const errorMessage = ref("");
const imageUrls = ref([]);
const requestStatus = ref(apiStatus.IDLE);

const getRandomDog = async () => {
  requestStatus.value = apiStatus.PENDING;
  const { response, error } = await withAsync(services.dogs.getRandomDog);
  if (error) {
    requestStatus.value = apiStatus.ERROR;
    errorMessage.value = error.message;
    return;
  }
  imageUrls.value = [response.message];
  requestStatus.value = apiStatus.SUCCESS;
};

const getDogByBreed = async () => {
  requestStatus.value = apiStatus.PENDING;
  const { response, error } = await withAsync(
    services.dogs.getDogsByBreed,
    breed.value
  );
  if (error) {
    requestStatus.value = apiStatus.ERROR;
    errorMessage.value = error.message;
    return;
  }
  imageUrls.value = response.message.slice(0, 10);
  requestStatus.value = apiStatus.SUCCESS;
};
</script>

<style></style>
