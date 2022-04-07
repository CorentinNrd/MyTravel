<script>
export default {
  name: "register-component",
  data() {
    return {
      post: {},
      error: null,
      errorInfo: null,
    };
  },
  methods: {
    async createPost() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: this.post }),
      };
      fetch("http://localhost:8000/register", requestOptions)
        .then((res) => res.json())
        .then(
          (data) => (
            (this.error = data.error), (this.errorInfo = data.error_info)
          )
        );
      // .then(this.$router.push('/') )
    },
  },
};
</script>

<template>
  <div class="flex justify-center mt-[10%]">
    <form
      @submit.prevent="createPost"
      class="w-1/4 bg-white shadow rounded border px-8 pt-8 pb-8 mb-4"
    >
      <input type="hidden" v-model="post.roles" />
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="email"
          placeholder="Email"
          v-model="post.email"
        />
      </div>
      <div>
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Mot de passe
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          v-model="post.password"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="confirmPassword"
        >
          Confirmer mot de passe
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="confirmPassword"
          type="password"
          placeholder="******************"
        />
      </div>
      <div class="flex justify-center">
        <button
          class="border font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-700 hover:text-white"
          type="submit"
        >
          Inscription
        </button>
      </div>
      <p class="text-red-600">{{ error }}</p>
      <p class="text-red-600">{{ errorInfo }}</p>
    </form>
  </div>
</template>
