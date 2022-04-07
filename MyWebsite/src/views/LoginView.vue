<template>
  <div class="login">
    <Login />
    <router-link
      class="flex justify-center cursor-pointer hover:text-gray-600 hover:underline"
      to="/register"
      >Vous avez pas encore de compte ?</router-link
    >
  </div>
</template>

<script>
import Login from "../components/Login.vue";

export default {
  name: "Login-view",
  components: {
    Login,
  },
};
</script>
