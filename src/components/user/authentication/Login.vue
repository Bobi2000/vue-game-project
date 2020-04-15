<template>
  <div>
    <sub-header message="Login to ViewAnime"></sub-header>
    <div class="card container">
      <article class="card-body">
        <a href="/register" class="float-right btn btn-outline-primary">Sign up</a>
        <h4 class="card-title mb-4 mt-1">Sign in</h4>
        <form @submit.prevent="login">
          <div class="form-group">
            <label>Your email</label>
            <input v-model="email" name class="form-control" placeholder="Email" type="email" />
          </div>
          <div class="form-group">
            <label>Your password</label>
            <input v-model="password" class="form-control" placeholder="******" type="password" />
          </div>
          <div class="form-group container">
            <button class="btn btn-primary btn-block">Login</button>
          </div>
          <div v-if="error">
            <p  class="text-danger">Invalid email or password!</p>
          </div>
        </form>
      </article>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SubHeader from "../../core/SubHeader.vue";
import authStore from "../../../store/auth.js";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: false
    };
  },
  methods: {
    login() {
      const { email, password } = this;

      axios
        .get(`https://localhost:44331/api/animeusers/${email}/${password}`)
        .then(res => {
          if (res.status === 200) {
            authStore.setUser(res.data);
            this.$router.push("/");
            location.reload();
            return;
          }
        });
        

          this.error = true;
    }
  },
  components: {
    SubHeader
  }
};
</script>

<style scoped>
</style>
