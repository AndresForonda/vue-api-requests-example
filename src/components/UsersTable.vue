<template>
  <table class="table-auto border-collapse border border-green-600">
    <thead class="">
      <tr class="bg-green-100">
        <th class="p-2 border-b border-green-600">Id</th>
        <th class="border-b border-green-600">Name</th>
        <th class="border-b border-green-600">Email</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="user in users"
        :key="user.id"
        @click="goToUser(user.id)"
        class="cursor-pointer"
      >
        <td class="py-1 border-b border-green-600">
          {{ user.id }}
        </td>
        <td class="border-b border-green-600 px-10 text-left">
          {{ user.name }}
        </td>
        <td class="border-b border-green-600 px-10 text-left">
          {{ user.email }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  users: {
    type: Array,
    default: () => [],
  },
});
const goToUser = (id) => {
  router.push({
    name: "User",
    params: {
      id,
    },
  });
};
</script>

<style></style>
