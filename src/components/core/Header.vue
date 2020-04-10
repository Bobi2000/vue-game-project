<template>
  <div>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">ViewAnime</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="/">
            Home
            <span class="sr-only">(current)</span>
          </a>
          <a class="nav-item nav-link active" href="/top-anime">Top Anime</a>
          <a class="nav-item nav-link active" href="/anime/1">Seasonal Anime</a>
          <a class="nav-item nav-link active" href="/categories">Categories</a>
          <a
            v-if="isLogged && isAdmin"
            class="nav-item nav-link active"
            href="/create-category"
          >Create A Category</a>
        </div>
      </div>
      <div v-if="!isLogged" class="navbar-nav navbar-right">
        <a class="nav-item nav-link active" href="/login">Login</a>
        <a class="nav-item nav-link active" href="/register">Sign Up</a>
      </div>
      <div v-else class="navbar-nav navbar-right">
        <a v-bind:href="'/user/' + id" class="nav-item nav-link active">{{username}}</a>
        <a @click="logout" class="nav-item nav-link active">Logout</a>
      </div>
    </nav>
  </div>
</template>

<script>
import authStore from "../../store/auth.js";

export default {
  data() {
    return {
      isLogged: false,
      username: "",
      isAdmin: false,
      id: 0
    };
  },
  created() {
    this.isLogged = authStore.checkIfIsLogged();
    if (this.isLogged) {
      this.username = authStore.getUsername();
      this.isAdmin = authStore.isAdmin();
      this.id = authStore.getUserId();
    }
  },
  methods: {
    logout() {
      this.$router.push("/");
      authStore.clearUser();
      this.isLogged = false;
    }
  }
};
</script>

<style scoped>
</style>
