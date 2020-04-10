<template>
  <div id="app">
    <app-header></app-header>

    <router-view> </router-view>

    
    <app-footer></app-footer>
  </div>
</template>

<script>
//import Home from "./components/Home.vue";
import AppHeader from "./components/core/Header.vue";
import AppFooter from "./components/core/Footer.vue";
//import AppLogin from "./components/Login.vue";
//import AppRegister from "./components/Register.vue";
//import AppCreateAnime from "./components/CreateAnime.vue";
//import AppCreateCategory from "./components/CreateCategory.vue";

export default {
  name: "App",
  components: {
    //Home,
    AppHeader,
    AppFooter,
    //AppLogin,
    //AppRegister,
    //AppCreateAnime,
    //AppCreateCategory,
  }
};
</script>

<style>

</style>
