import { createStore } from "vuex";
import { JokesData, Joke } from "@/models/JokesModel";
import axios from "axios";

export default createStore({
  modules: {
    jokesState: {
      namespaced: true,
      state: {
        data: {} as JokesData,
      },
      getters: {
        JOKES: (state) => state.data,
      },
      actions: {
        async GET_JOKES_FROM_API({ commit }) {
          try {
            const data = await axios.get(
              "https://v2.jokeapi.dev/joke/Programming?type=single&amount=10"
            );
            commit("SET_JOKES_TO_STATE", data.data);
          } catch (error) {
            alert(error);
            console.log(error);
          }
        },
      },
      mutations: {
        SET_JOKES_TO_STATE(state, data) {
          state.data = data;
        },
      },
    },

    singleJokeState: {
      namespaced: true,
      state: {
        data: {} as Joke,
      },
      getters: {
        JOKE: (state) => state.data,
      },
      actions: {
        GET_JOKES_FROM_API(context, id) {
          axios
            .get(`https://v2.jokeapi.dev/joke/Any?idRange=${id}`)
            .then((resp) => {
              context.commit("SET_JOKE_TO_STATE", resp.data);
            });
        },
      },
      mutations: {
        SET_JOKE_TO_STATE(state, data) {
          state.data = data;
        },
      },
    },
  },
});
