<script setup>
import { ref } from "vue";
let travel = ref(null);
let post = {};
function search() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ travel: post }),
  };
  fetch("http://localhost:8000/travel/search", requestOptions)
    .then((res) => res.json())
    .then((data) => (travel.value = data));
}
</script>

<template>
  <div class="grid grid-cols-2">
    <div class="mt-5 flex justify-center">
      <form class="w-1/2" @submit.prevent="search">
        <label
          class="block text-gray-700 text-left text-sm font-bold mb-2 mt-10"
          for="destination"
        >
          Nom de la destination
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="destination"
          name="destination"
          v-model="post.destination"
        />
        <label
          class="block text-gray-700 text-left text-sm font-bold mb-2 mt-5"
          for="price"
        >
          Prix
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="price"
          name="price"
          v-model="post.price"
        />
        <button
          class="w-full border font-bold py-2 px-4 mt-5 rounded focus:outline-none focus:shadow-outline hover:bg-blue-400 hover:text-white"
          type="submit"
        >
          chercher
        </button>
      </form>
    </div>
    <div class="mt-5">
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
    </div>
  </div>
</template>
