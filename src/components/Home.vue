<template>
  <transition name="slide-fade">
    <div v-if="show">
      <sub-header message="Home Page"></sub-header>
      <div class="container">
        <div v-for="category in animes" :key="category.data[0].categoryTitle">
          <article>
            <hr />
            <a class="animeLink" v-bind:href="'/anime/' + category.data[0].categoryId">
              <h4 class="animeLink">{{category.data[0].categoryTitle}}</h4>
            </a>
            <hr />

            <div class="card-deck">
              <div
                v-for="anime in category.data"
                :key="anime.id"
                class="card bg-light text-white hover11"
              >
                <a class="animeLink" v-bind:href="'anime-details/' + anime.id">
                  <p class="card-text">{{anime.title}}</p>
                  <figure>
                    <img
                      width="196"
                      height="300"
                      class="card-img image"
                      v-bind:src="anime.thumbnailURL"
                      alt="Card image"
                    />
                    <div class="card-img-overlay"></div>
                  </figure>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import SubHeader from "./core/SubHeader.vue";
import AnimeService from "./services/anime";

const restAnimeService = new AnimeService();

export default {
  name: "Home",

  components: {
    SubHeader
  },
  data() {
    return {
      animes: [],
      show: false
    };
  },
  created() {
    this.loadAnimes();
  },

  mounted() {},

  methods: {
    loadAnimes() {
      restAnimeService.loadSeasonalAnime().then(data => {
        this.animes.push(data);
        restAnimeService.loadSummerAnime().then(data => {
          this.animes.push(data);
          this.show = true;
        });
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
