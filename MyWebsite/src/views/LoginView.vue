<script setup>
import { RouterLink } from "vue-router";
import Login from "../components/Login.vue";
</script>

<template>
  <div class="login">
    <Login />
    <RouterLink
      class="flex justify-center cursor-pointer hover:text-gray-600 hover:underline"
      to="/register"
      >Vous avez pas encore de compte ?</RouterLink
    >
  </div>
</template>
