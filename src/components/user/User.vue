<template>
  <div>
    <sub-header v-bind:message=" username + `'s Rated  Animes`"></sub-header>
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
</template>

<script>
import SubHeader from "../core/SubHeader.vue";
import StarRating from "vue-star-rating";
import authStore from "../../store/auth.js";
import UserService from "../services/user.js";

export default {
  name: "User",

  components: {
    SubHeader,
    StarRating
  },

  data() {
    return {
      rankedAnimes: {},
      username: ""
    };
  },
  created() {
    //this.loadRankingAnimes(this.$route.params.id);
    const restUserService = new UserService();
    restUserService.loadRankingAnimes(this.$route.params.id).then(data => {
      this.rankedAnimes = data.data;
    });
    this.username = authStore.getUsername();
  },
};
</script>

<style scoped>
.animeLink {
  text-decoration: none;
  color: black;
}
</style>
