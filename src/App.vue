<template>
  <div id="app">
    <app-header></app-header>
    <home></home>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import AppHeader from "./components/core/Header.vue";
import AppFooter from "./components/core/Footer.vue";

export default {
  name: "App",
  components: {
    Home,
    AppHeader,
    AppFooter
  }
};
</script>

<style>

</style>
