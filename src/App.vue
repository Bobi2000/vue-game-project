<template>
  <div id="app">
    <app-header></app-header>
    <home></home>
    <app-login></app-login>
    <app-register></app-register>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import AppHeader from "./components/core/Header.vue";
import AppFooter from "./components/core/Footer.vue";
import AppLogin from "./components/Login.vue";
import AppRegister from "./components/Register.vue";

export default {
  name: "App",
  components: {
    Home,
    AppHeader,
    AppFooter,
    AppLogin,
    AppRegister
  }
};
</script>

<style>

</style>
