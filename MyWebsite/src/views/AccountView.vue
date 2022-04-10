<script setup>
import { onMounted } from "vue";
import Account from "@/components/Account.vue";
let user = JSON.parse(localStorage.getItem("data_user"));
onMounted(() => {
  return user;
});
</script>

<template>
  <main class="text-center mt-5">
    <h1>Bonjour {{ user.email }}</h1>
    <Account />
  </main>
</template>
