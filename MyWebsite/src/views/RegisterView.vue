<template>
  <div class="register">
    <Register />
    <router-link
      class="flex justify-center cursor-pointer hover:text-gray-600 hover:underline"
      to="/login"
      >Vous avez déjà un compte ?</router-link
    >
  </div>
</template>

<script>
import Register from "../components/Register.vue";

export default {
  name: "Register-view",
  components: {
    Register,
  },
};
</script>
