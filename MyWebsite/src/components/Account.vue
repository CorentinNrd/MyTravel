<script setup>
import { onMounted } from "vue";
let user = JSON.parse(localStorage.getItem("data_user"));
let travel = [];
onMounted(() => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id_user: user.id }),
  };
  fetch("http://localhost:8000/travel/getSave", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        const requestOptionsUser = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id_travel: element.id_travel }),
        };
        fetch(`http://localhost:8000/travel/getTravel`, requestOptionsUser)
          .then((response) => response.json())
          .then((data) => {
            travel.push(data);
            console.log(travel);
          });
      });
    });
  return { travel };
});
</script>

<template>
  <div>
    <ul v-for="travels in travel" v-bind:key="travels.id">
      <li>
        <p>{{ console.log(travel) }}</p>
      </li>
    </ul>
  </div>
</template>
