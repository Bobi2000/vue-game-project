<template>
  <div>
    <sub-header message="Register to MyAnimeList"></sub-header>
    <div class="card container">
      <article class="card-body">
        <a href class="float-right btn btn-outline-primary">Sign in</a>
        <h4 class="card-title mb-4 mt-1">Sign up</h4>
        <form @submit.prevent="submitHandler">
          <div class="form-group">
            <label>Your email</label>
            <input
              name="email"
              v-model="email"
              @blur="$v.email.$touch"
              class="form-control"
              placeholder="Email"
              type="email"
            />
            <template v-if="$v.email.$error">
              <p v-if="!$v.email.required" class="text-danger">Email is required!</p>
              <p v-else-if="!$v.email.email" class="text-danger">Email is invalid!</p>
            </template>
          </div>
          <div class="form-group">
            <label>Your username</label>
            <input
              name="username"
              v-model="username"
              @blur="$v.username.$touch"
              class="form-control"
              placeholder="Username"
              type="text"
            />
          </div>
          <template v-if="$v.username.$error">
            <p v-if="!$v.username.required" class="text-danger">Username is required!</p>
            <p v-else-if="!$v.username.username" class="text-danger">Username is invalid!</p>
          </template>

          <div class="form-group">
            <label>Your password</label>
            <input
              name="password"
              type="password"
              v-model="password"
              @blur="$v.password.$touch"
              class="form-control"
              placeholder="******"
            />
          </div>
          <template v-if="$v.password.$error">
            <p v-if="!$v.password.required" class="text-danger">Password is required!</p>
          </template>

          <div class="form-group">
            <label>Repeat your password</label>
            <input
              name="re-password"
              class="form-control"
              v-model="rePassword"
              @blur="$v.rePassword.$touch"
              placeholder="******"
              type="password"
            />
          </div>

          <template v-if="$v.rePassword.$error">
            <p v-if="!$v.rePassword.required" class="text-danger">Repeat Password is required!</p>
            <p
              v-if="!$v.rePassword.sameAs"
              class="text-danger"
            >Repeat Password does not match password!</p>
          </template>

          <div class="form-group container">
            <button class="btn btn-primary btn-block">Register</button>
          </div>
        </form>
      </article>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  sameAs,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
import { helpers } from "vuelidate/lib/validators";
import axios from "axios";
import SubHeader from "./core/SubHeader.vue";

const alphanumeric = helpers.regex("alphanumeric", /^[a-zA-Z0-9]*$/);

export default {
  mixins: [validationMixin],
  data() {
    return {
      username: "",
      email: "",
      password: "",
      rePassword: "",
    };
  },
  validations: {
    username: {
      required,
      minLength: minLength(3),
      maxLenght: maxLength(16)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(3),
      maxLenght: maxLength(16),
      alphanumeric
    },
    rePassword: {
      required,
      sameAs: sameAs("password")
    }
  },

  methods: {
    submitHandler() {
      this.$v.$touch();
      if (this.$v.$invalid) { return; }

      const { username, email, password } = this;
      axios.post(`https://localhost:44331/api/animeusers`, { username, email, password }).then(() => {
        this.$router.push("/login");
      });
    },
    /*register() {
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
    },*/
  },

  components: {
    SubHeader
  }
};
</script>

<style scoped>
</style>
