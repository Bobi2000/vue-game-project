<template>
  <transition name="slide-fade">
    <div v-if="show">
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
                <table>
                  <tbody>
                    <tr>
                      <td class="border-0">
                        <a class="animeLink" v-bind:href="'/anime-details/' + anime.animeId">
                          <img width="80" height="100" v-bind:src="anime.imgUrl" alt="Anime image" />
                        </a>
                      </td>
                      <td class="border-0">
                        <br />
                        <a class="animeLink" v-bind:href="'/anime-details/' + anime.animeId">
                          <p>&nbsp;{{anime.title}}</p>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <br />
                <h4>
                  <table>
                    <tbody>
                      <tr>
                        <td class="border-0">
                          <star-rating
                            v-bind:increment="0.01"
                            v-bind:rating="anime.ranking / 10"
                            v-bind:read-only="true"
                            v-bind:show-rating="false"
                            v-bind:max-rating="1"
                            v-bind:star-size="34"
                          ></star-rating>
                        </td>
                        <td class="border-0">{{anime.ranking}}</td>
                      </tr>
                    </tbody>
                  </table>
                </h4>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </transition>
</template>

<script>
import SubHeader from "../core/SubHeader.vue";
import StarRating from "vue-star-rating";
import animeService from "../services/anime.js";
const restAnimeService = new animeService();

export default {
  name: "TopAnime",

  components: {
    SubHeader,
    StarRating
  },

  data() {
    return {
      rankedAnimes: {},
      show: false
    };
  },
  created() {
    this.loadRankingAnimes();
  },
  methods: {
    loadRankingAnimes() {
      restAnimeService.topAnime().then(data => {
        this.rankedAnimes = data.data;
        this.show = true;
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

.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
