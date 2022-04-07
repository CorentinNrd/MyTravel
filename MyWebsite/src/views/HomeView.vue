<script setup>
import { ref, onMounted } from "vue";
let travel = ref(null);
onMounted(() => {
  fetch("http://localhost:8000/travel/get")
    .then((res) => res.json())
    .then((data) => (travel.value = data));
  return { travel };
});
</script>

<template>
  <main class="text-center">
    <h1>Bienvenue sur mon site !</h1>
    <ul class="justify-items-center">
      <li
        v-for="travels in travel"
        v-bind:key="travels.id"
        class="w-1/2 text-left mt-10"
      >
        <p>{{ travels.destination }}</p>
        <p>{{ travels.price }}</p>
        <p>{{ travels.informations }}</p>
      </li>
    </ul>
  </main>
</template>
