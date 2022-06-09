<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Random Name Picker</h1>
          <p>{{ chosenName }}</p>
          <button @click="picker">Choose!</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
  data: () => ({
    list: [
      "Bogdans",
      "Ņikita",
      "Artis",
      "Elvis",
      "Regīna",
      "Ilona",
      "Inta",
      "Arnis",
      "Alberts",
      "Jānis",
      "Artūrs",
      "Edgars",
      "Haralds",
      "Ieva",
      "Niklāvs",
      "Rihards",
      "Roberts",
      "Ričards",
    ],
    chosenName: "",
  }),
  methods: {
    picker() {
      let chosenNumber = Math.floor(Math.random() * this.list.length);
      this.chosenName = this.list[chosenNumber];
    },
  },
});
</script>
