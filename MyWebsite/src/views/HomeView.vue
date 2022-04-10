<script setup>
import { ref, onMounted } from "vue";
let travel = ref(null);
let user = JSON.parse(localStorage.getItem("data_user"));
onMounted(() => {
  fetch("http://localhost:8000/travel/get")
    .then((res) => res.json())
    .then((data) => (travel.value = data.slice(0, 3)));
  return { travel };
});

function reserve(id) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id_travel: id, id_user: user.id }),
  };
  fetch("http://localhost:8000/travel/save", requestOptions)
    .then((res) => res.json())
    .then((data) => console.log(data));
}
</script>

<template>
  <main>
    <img
      src="https://www.anloya.com/wp-content/uploads/2021/01/defaul.jpg"
      alt="Chargement"
      class="w-full h-[350px] object-cover"
    />
    <div class="grid grid-cols-2 bg-gray-100 text-black">
      <div class="mt-5 ml-10">
        <h1 class="text-lg underline">Notre agence :</h1>
        <div class="mt-3 text-sm">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            tristique mi. Morbi imperdiet augue nibh, in sollicitudin dolor
            fermentum in. Cras pellentesque turpis quis odio sodales, tempus
            facilisis dolor sodales. Ut varius dolor sit amet sem elementum
            convallis sed nec nibh.
          </p>
          <img
            src="https://www.autourdublog.fr/wp-content/uploads/2016/10/famous-buildings-round-the-world-travel-wallpaper.jpg"
            alt="chargement"
            class="mt-4 rounded-sm border border-gray-300"
          />
        </div>
      </div>
      <section id="results">
        <ul class="flex flex-col items-center">
          <li
            v-for="travels in travel"
            v-bind:key="travels.id"
            class="w-1/2 text-left mt-10 border rounded-sm"
          >
            <p class="text-lg ml-3 mr-3 mt-3">{{ travels.destination }}</p>
            <p class="ml-3 mr-3 text-xs">{{ travels.price }}</p>
            <p class="ml-3 mr-3 text-sm">{{ travels.informations }}</p>
            <p class="ml-3 mr-3 mb-3 mt-2 text-smf">
              <button
                @click="reserve(travels._id)"
                class="w-full border py-2 px-4 rounded bg-blue-200 hover:bg-blue-400"
              >
                Reserver
              </button>
            </p>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>
