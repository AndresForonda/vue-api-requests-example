<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" class="mx-auto" />
  </div>
  <h1>API Layer</h1>

  <p>
    <router-link to="/basic-request">Basic Request</router-link>
    |
    <router-link to="/request-with-loading-and-error"
      >Request with loading and error</router-link
    >
    |
    <router-link to="/request-with-status">Request with status</router-link>
    |
    <router-link to="/request-with-status-and-api-client"
      >Request with status and api client</router-link
    >
    |
    <router-link to="/equest-with-async-helper"
      >Request with async helper</router-link
    >
    |
    <router-link to="/users">Users</router-link>
  </p>

  <button type="button" @click="state.count++">
    count is: {{ state.count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import { defineProps, reactive } from "vue";

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
