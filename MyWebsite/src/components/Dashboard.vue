<script>
export default {
  name: "dashbard-component",
  data() {
    return {
      post: {},
      error: null,
      errorInfo: null,
    };
  },
  methods: {
    async createTravel() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ travel: this.post }),
      };
      fetch("http://localhost:8000/travel", requestOptions)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<template>
  <div class="flex justify-center mt-10">
    <form class="w-1/4" @submit.prevent="createTravel">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="destination"
      >
        Destination
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        name="destination"
        id="destination"
        placeholder="Destination"
        v-model="post.destination"
      />
      <label
        class="block text-gray-700 text-sm font-bold mb-2 mt-4"
        for="price"
      >
        Prix
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        name="price"
        id="price"
        placeholder="price"
        v-model="post.price"
      />
      <label
        class="block text-gray-700 text-sm font-bold mb-2 mt-4"
        for="informations"
      >
        Informations
      </label>
      <textarea
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="informations"
        id="informations"
        cols="30"
        rows="10"
        v-model="post.informations"
      ></textarea>
      <!-- <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        name="price"
        id="price"
        placeholder="price"
        v-model="post.price"
      /> -->
      <div class="flex justify-center mt-5">
        <button
          class="border font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-700 hover:text-white"
          type="submit"
        >
          Créer
        </button>
      </div>
    </form>
  </div>
</template>
