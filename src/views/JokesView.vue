<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <JokeCard />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JokeCard from "@/components/JokeCard/JokeCard.vue";

export default defineComponent({
  name: "JokesView",
  components: { JokeCard },
  computed: {},
  methods: {},
});
</script>

<style scoped></style>
