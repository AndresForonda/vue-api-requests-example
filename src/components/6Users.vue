<template>
  <div class="mt-20">
    <button
      class="mb-10 bg-green-500 px-10 py-3 text-white font-bold rounded-lg"
      @click="getAll"
    >
      Get all (first 20)
    </button>
    <idle
      v-if="requestStatus === apiStatus.IDLE"
      idle-text="No users fetched yet"
    />
    <loading v-if="requestStatus === apiStatus.PENDING" />
    <error
      v-if="requestStatus === apiStatus.ERROR"
      :error-message="errorMessage"
    />
    <div class="w-full" v-if="requestStatus === apiStatus.SUCCESS">
      <users-table class="mx-auto" :users="users" />
    </div>
  </div>
</template>

<script setup>
import services from "../services";
import { apiStatus } from "../api/constans/apiStatus";
import UsersTable from "./UsersTable.vue";
import { withAsync } from "../helpers/withAsync";
import { ref } from "vue";
import Loading from "./Loading.vue";
import Error from "./Error.vue";
import Idle from "./Idle.vue";

const users = ref([]);
const requestStatus = ref(apiStatus.IDLE);
const errorMessage = ref("");

const getAll = async () => {
  requestStatus.value = apiStatus.PENDING;
  const { response, error } = await withAsync(services.users.getAll);
  if (error) {
    requestStatus.value = apiStatus.ERROR;
    errorMessage.value = error.message;
    return;
  }
  users.value = response.data;
  requestStatus.value = apiStatus.SUCCESS;
};
</script>

<style></style>
