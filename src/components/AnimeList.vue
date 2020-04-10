<template>
  <div>
    <sub-header v-bind:message="animes[0].categoryTitle"></sub-header>
    <div class="container">
      <div class="card-columns">
        <div v-for="anime in animes" :key="anime.id" class="card">
          <img
            class="card-img-top"
            v-bind:src="anime.thumbnailURL"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">{{anime.title}}</h5>
            <p
              class="card-text"
            >{{anime.synopsis}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SubHeader from "./core/SubHeader.vue";

export default {
  name: "AnimeList",

  components: {
    SubHeader
  },
  data() {
    return {
      animes: {}
    };
  },
  created() {},

  mounted() {
    this.loadAnimes(this.$route.params.id);
  },

  methods: {
    loadAnimes(id) {
      this.isLoading = true;
      axios.get(`https://localhost:44331/api/anime/${id}/100`).then(data => {
        this.animes = data.data;
        this.isLoading = false;
      });
    }
  }
};
</script>

<style scoped>
figure {
  margin: 0;
  padding: 0;
  background: #fff;
  overflow: hidden;
}
figure:hover + span {
  bottom: -36px;
  opacity: 1;
}
.hover11 figure img {
  opacity: 1;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.hover11 figure:hover img {
  opacity: 0.8;
}

.animeLink {
  text-decoration: none;
  color: black;
}
</style>
