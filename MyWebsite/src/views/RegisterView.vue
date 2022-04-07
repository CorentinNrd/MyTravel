<script setup>
import { RouterLink } from "vue-router";
import Register from "../components/Register.vue";
</script>

<template>
  <div class="register">
    <Register />
    <RouterLink
      class="flex justify-center cursor-pointer hover:text-gray-600 hover:underline"
      to="/login"
      >Vous avez déjà un compte ?</RouterLink
    >
  </div>
</template>
