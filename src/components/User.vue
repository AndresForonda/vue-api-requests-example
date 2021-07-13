<template>
  <idle
    v-if="requestStatus === apiStatus.IDLE"
    idle-text="No users fetched yet"
  />
  <loading v-if="requestStatus === apiStatus.PENDING" />
  <error
    v-if="requestStatus === apiStatus.ERROR"
    :error-message="errorMessage"
  />
  <div
    v-if="requestStatus === apiStatus.SUCCESS"
    class="
      max-w-sm
      mx-auto
      mt-20
      p-10
      border border-green-600
      bg-green-100
      text-black
      font-bold
      rounded-xl
    "
  >
    <img
      class="mx-auto mb-10"
      src="https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"
      alt=""
    />
    <div class="text-left">
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Status: {{ user.status }}</p>
    </div>
    <button
      class="
        mt-10
        mb-10
        bg-green-500
        px-10
        py-2
        ml-2
        text-white
        font-bold
        rounded-lg
      "
      @click="goToUsers"
    >
      Back
    </button>
  </div>
</template>

<script setup>
import services from "../services";
import { apiStatus } from "../api/constans/apiStatus";
import { withAsync } from "../helpers/withAsync";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import Loading from "./Loading.vue";
import Error from "./Error.vue";
import Idle from "./Idle.vue";

const route = useRoute();
const router = useRouter();

const requestStatus = ref(apiStatus.IDLE);
const errorMessage = ref("");
const user = ref({});

const find = async () => {
  const { id } = route.params;
  requestStatus.value = apiStatus.PENDING;
  const { response, error } = await withAsync(services.users.find, id);
  if (error) {
    requestStatus.value = apiStatus.ERROR;
    errorMessage.value = error.message;
    return;
  }
  user.value = response.data;
  requestStatus.value = apiStatus.SUCCESS;
};
find();

const goToUsers = () => router.push({ name: "Users" });
</script>

<style></style>
