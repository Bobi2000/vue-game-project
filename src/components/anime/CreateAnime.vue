<template>
  <div class="card container">
    <article class="card-body">
      <h4 class="card-title mb-4 mt-1">Add An Anime</h4>
      <form @submit.prevent="submitHandler">
        <div class="form-group">
          <label>Name</label>
          <input v-model="title" name class="form-control" placeholder="Name" type="text" />
        </div>
        <div class="form-group">
          <label>URL Thumbnail</label>
          <input
            v-model="thumbnailURL"
            name
            class="form-control"
            placeholder="URL Thumbnail"
            type="text"
          />
        </div>
        <div class="form-group">
          <label>URL Trailer</label>
          <input
            v-model="trailerURL"
            name
            class="form-control"
            placeholder="URL Thumbnail"
            type="text"
          />
        </div>
        <div class="form-group">
          <label>Synopsis</label>
          <input v-model="synopsis" name class="form-control" placeholder="Synopsis" type="text" />
        </div>
        <div class="form-group container">
          <button class="btn btn-primary btn-block">Create An Anime</button>
        </div>
      </form>
    </article>
  </div>
</template>

<script>
import authStore from "../../store/auth.js";
import animeService from "../services/anime.js";
const restAnimeService = new animeService();

export default {
  name: "CreateAnime",
  data() {
    return {
      title: "",
      thumbnailURL: "",
      trailerURL: "",
      synopsis: ""
    };
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
      const { title, thumbnailURL, trailerURL, synopsis } = this;
      let categoryId = Number(this.$route.params.id);
      restAnimeService.createAnime(
        title,
        thumbnailURL,
        trailerURL,
        synopsis,
        categoryId,
        this.$router,
      );
    }
  }
};
</script>

<style scoped>
</style>
