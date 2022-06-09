<template>
  <section>
    <AppHeader />

    <div class="container">
      <nav class="app-nav start-md">
        <router-link class="app-nav__link" to="/">Names</router-link> |
        <router-link class="app-nav__link" to="/random-jokes">
          Jokes
        </router-link>
      </nav>
      <router-view />
    </div>
  </section>
</template>

<script>
import AppHeader from "@/components/Header/Header";

export default {
  components: { AppHeader },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.app-nav {
  margin: 20px 0 20px 0;
}

.app-nav__link {
  text-decoration: none;
  color: inherit;

  &:hover {
    color: lightblue;
  }
}
</style>
