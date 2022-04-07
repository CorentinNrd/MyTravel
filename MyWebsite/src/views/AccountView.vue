<script setup>
import { onMounted } from "vue";
let user = JSON.parse(localStorage.getItem("data_user"));
onMounted(() => {
  return user;
});
</script>

<template>
    <main class="text-center">
        <h1>Bonjour {{ user.email }}</h1>
    </main>
</template>