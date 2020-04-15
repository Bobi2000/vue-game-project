<template>
  <div>
    <sub-header message="Create A New Category"></sub-header>
    <div class="card container">
      <article class="card-body">
        <h4 class="card-title mb-4 mt-1">Add A Category</h4>
        <form @submit.prevent="submitHandler">
          <div class="form-group">
            <label>Category name</label>
            <input
              v-model="title"
              name="title"
              class="form-control"
              placeholder="Category name"
              type="text"
            />
          </div>
          <div class="form-group container">
            <button class="btn btn-primary btn-block">Create a category</button>
          </div>
        </form>
      </article>
    </div>
  </div>
</template>

<script>
import SubHeader from "../core/SubHeader.vue";
import authStore from "../../store/auth.js";
import axios from "axios";

export default {
  name: "CreateCategory",

  data() {
    return {
      title: ""
    };
  },
  components: {
    SubHeader
  },
  created() {
    if (!authStore.checkIfIsLogged()) {
      this.$router.push("/");
    }
    if (!authStore.isAdmin()) {
      this.$router.push("/");
    }
  },
  methods: {
    submitHandler() {
      const { title } = this;

      axios
        .post(`https://localhost:44331/api/Categories`, { title })
        .then(() => {
          this.$router.push("/");
        });
    }
  }
};
</script>

<style scoped>
</style>
