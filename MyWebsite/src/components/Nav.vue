<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
let user = JSON.parse(localStorage.getItem("data_user"));
onMounted(() => {
  return user;
});

function logout() {
  localStorage.clear();
  window.location = "/login";
}
</script>

<template>
  <header>
    <div class="flex justify-between mr-5 ml-5">
      <nav class="flex gap-5">
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/travels">Voyages</RouterLink>
        <RouterLink to="/about">Qui sommes-nous ?</RouterLink>
      </nav>
      <nav class="flex gap-5" v-if="!user">
        <RouterLink to="/login">Connexion</RouterLink>
        <RouterLink to="/register">Inscription</RouterLink>
      </nav>
      <nav class="flex gap-5" v-else-if="user.roles == 'Admin'">
        <RouterLink to="/account">Compte</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
        <button @click="logout">Déconnexion</button>
      </nav>
      <nav class="flex gap-5" v-else>
        <RouterLink to="/account">Compte</RouterLink>
        <button @click="logout">Déconnexion</button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
a:hover {
  text-decoration: underline;
}
</style>
