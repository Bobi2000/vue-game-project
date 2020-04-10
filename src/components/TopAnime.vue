<template>
  <div>
      <sub-header message="Top Anime"></sub-header>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Title</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="anime in rankedAnimes" :key="anime.animeId">
            <th scope="row">
              <br />
              <h4>{{anime.rank}}</h4>
            </th>
            <td>
              <img width="80" height="100" v-bind:src="anime.imgUrl" alt="Anime image" />
              <a class="animeLink" v-bind:href="'/anime-details/' + anime.animeId"><h7>{{anime.title}}</h7></a>
            </td>
            <td>
              <br />
              <h4>{{anime.ranking}}</h4>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SubHeader from "./core/SubHeader.vue";

export default {
  name: "TopAnime",

  components: {
    SubHeader
  },

  data() {
    return {
      rankedAnimes: {}
    };
  },
  created() {
    this.loadRankingAnimes();
  },
  methods: {
    loadRankingAnimes() {
      axios.get(`https://localhost:44331/api/animeratings/`).then(data => {
        this.rankedAnimes = data.data;
      });
    }
  }
};
</script>

<style scoped>
.animeLink {
  text-decoration: none;
  color: black;
}
</style>
