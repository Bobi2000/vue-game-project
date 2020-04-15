<template>
<transition name="slide-fade">
  <div v-if="show">
    <div>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <h5>
                <a class="nav-item nav-link active">{{category.title}}</a>
              </h5>
            </div>
          </div>
          <div class="navbar-nav navbar-right">
            <a
              v-if="isLogged && isAdmin"
              class="nav-item nav-link active"
              v-bind:href="'/create-anime/' + category.id"
            >
              <h5>Add Anime</h5>
            </a>
          </div>
        </nav>
      </div>
    </div>
    <div class="container">
      <div class="card-columns">
        <div v-for="anime in animes" :key="anime.id" class="card">
          <a class="animeLink" v-bind:href="'/anime-details/' + anime.id">
            <img
              width="354"
              height="496"
              class="card-img-top"
              v-bind:src="anime.thumbnailURL"
              alt="Card image cap"
            />
          </a>
          <div class="card-body">
            <a class="animeLink" v-bind:href="'/anime-details/' + anime.id">
              <h5 class="card-title">{{anime.title}}</h5>
            </a>
            <div v-if="anime.synopsis.length > 10">
              <p class="card-text">{{anime.synopsis.substring(0,110)}} ...</p>
            </div>
            <div v-else>
              <p class="card-text">{{anime.synopsis}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </transition>
</template>


<script>
import authStore from "../../store/auth.js";
import CategoryService from "../services/categories";

const restCategoryService = new CategoryService();

export default {
  name: "AnimeList",

  components: {},
  data() {
    return {
      animes: {},
      isLogged: false,
      isAdmin: false,
      category: {},
      show: false
    };
  },
  created() {
    this.isLogged = authStore.checkIfIsLogged();
    if (this.isLogged) {
      this.isAdmin = authStore.isAdmin();
    }
  },

  mounted() {
    this.loadAnimes(this.$route.params.id);
  },

  methods: {
    loadAnimes(id) {

      restCategoryService.getCategory(id).then(data => {
        this.category = data.data;

        restCategoryService.getAnimesByCategory(id).then(data => {
          this.animes = data.data;
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
