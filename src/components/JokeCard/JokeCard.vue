<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div :key="joke.id" v-for="joke in jokes">
            <div class="joke-card">
              <h4>{{ joke.joke }}</h4>
              <button class="joke-card__btn">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapActions, mapMutations } from "vuex";

export default defineComponent({
  name: "JokeCard",
  data: () => ({}),
  mounted() {
    this.$store.dispatch("jokesState/GET_JOKES_FROM_API");
  },
  computed: {
    ...mapState("jokesState", {
      jokes: (state) => state.data.jokes,
    }),
  },
  methods: {
    ...mapActions("jokesState", ["GET_JOKES_FROM_API"]),
    ...mapMutations("singleJokeState", ["SET_JOKE_TO_STATE"]),
  },
});
</script>

<style scoped lang="scss">
.joke-card {
  display: flex;
  gap: 20px;
  border: 1px solid black;
  padding: 20px;
  margin-bottom: 10px;

  .joke-card__btn {
    border: none;

    &:hover {
      cursor: pointer;
      color: lightblue;
    }
  }
}
</style>
