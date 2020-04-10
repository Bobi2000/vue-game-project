<template>
  <div>
    <sub-header message="Home Page"></sub-header>
    <div class="container">
      <div v-for="category in animes" :key="category.data[0].categoryTitle">
        <article>
          <hr />
          <a class="animeLink" v-bind:href="'anime/' + category.data[0].categoryId">
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
                  <img class="card-img image" v-bind:src="anime.thumbnailURL" alt="Card image" />
                  <div class="card-img-overlay"></div>
                </figure>
              </a>
            </div>
          </div>
        </article>
      </div>

      <!-- <article>
        <a href="#">Spring 2020 Anime</a>
        <hr />
        <div class="card-deck">
          <div class="card bg-dark text-white">
            <img
              class="card-img"
              src="https://cdn.myanimelist.net/r/160x220/images/anime/1380/106565.webp?s=0c830cdc9d46316ce7dfc579ebd8cdfd"
              alt="Card image"
            />
            <div class="card-img-overlay">
              <h5 class="card-title">Glepnir</h5>
            </div>
          </div>
          <div class="card bg-dark text-white">
            <img
              class="card-img"
              src="https://cdn.myanimelist.net/r/160x220/images/anime/1380/106565.webp?s=0c830cdc9d46316ce7dfc579ebd8cdfd"
              alt="Card image"
            />
            <div class="card-img-overlay">
              <h5 class="card-title">Glepnir</h5>
            </div>
          </div>
          <div class="card bg-dark text-white">
            <img
              class="card-img"
              src="https://cdn.myanimelist.net/r/160x220/images/anime/1380/106565.webp?s=0c830cdc9d46316ce7dfc579ebd8cdfd"
              alt="Card image"
            />
            <div class="card-img-overlay">
              <h5 class="card-title">Glepnir</h5>
            </div>
          </div>
          <div class="card bg-dark text-white">
            <img
              class="card-img"
              src="https://cdn.myanimelist.net/r/160x220/images/anime/1380/106565.webp?s=0c830cdc9d46316ce7dfc579ebd8cdfd"
              alt="Card image"
            />
            <div class="card-img-overlay">
              <h5 class="card-title">Glepnir</h5>
            </div>
          </div>
          <div class="card bg-dark text-white">
            <img
              class="card-img"
              src="https://cdn.myanimelist.net/r/160x220/images/anime/1380/106565.webp?s=0c830cdc9d46316ce7dfc579ebd8cdfd"
              alt="Card image"
            />
            <div class="card-img-overlay">
              <h5 class="card-title">Glepnir</h5>
            </div>
          </div>
          <div class="card bg-dark text-white">
            <img
              class="card-img"
              src="https://cdn.myanimelist.net/r/160x220/images/anime/1380/106565.webp?s=0c830cdc9d46316ce7dfc579ebd8cdfd"
              alt="Card image"
            />
            <div class="card-img-overlay">
              <h5 class="card-title">Glepnir</h5>
            </div>
          </div>
        </div>
      </article>
      <article>
        <a href="#">Spring 2020 Anime</a>
        <hr />
        <div class="card-deck">
          <div class="card bg-dark text-white">
            <img
              class="card-img"
              src="https://cdn.myanimelist.net/r/160x220/images/anime/1380/106565.webp?s=0c830cdc9d46316ce7dfc579ebd8cdfd"
              alt="Card image"
            />
            <div class="card-img-overlay">
              <h5 class="card-title">Glepnir</h5>
            </div>
          </div>
          <div class="card bg-dark text-white">
            <img
              class="card-img"
              src="https://cdn.myanimelist.net/r/160x220/images/anime/1380/106565.webp?s=0c830cdc9d46316ce7dfc579ebd8cdfd"
              alt="Card image"
            />
            <div class="card-img-overlay">
              <h5 class="card-title">Glepnir</h5>
            </div>
          </div>
          <div class="card bg-dark text-white">
            <img
              class="card-img"
              src="https://cdn.myanimelist.net/r/160x220/images/anime/1380/106565.webp?s=0c830cdc9d46316ce7dfc579ebd8cdfd"
              alt="Card image"
            />
            <div class="card-img-overlay">
              <h5 class="card-title">Glepnir</h5>
            </div>
          </div>
          <div class="card bg-dark text-white">
            <img
              class="card-img"
              src="https://cdn.myanimelist.net/r/160x220/images/anime/1380/106565.webp?s=0c830cdc9d46316ce7dfc579ebd8cdfd"
              alt="Card image"
            />
            <div class="card-img-overlay">
              <h5 class="card-title">Glepnir</h5>
            </div>
          </div>
          <div class="card bg-dark text-white">
            <img
              class="card-img"
              src="https://cdn.myanimelist.net/r/160x220/images/anime/1380/106565.webp?s=0c830cdc9d46316ce7dfc579ebd8cdfd"
              alt="Card image"
            />
            <div class="card-img-overlay">
              <h5 class="card-title">Glepnir</h5>
            </div>
          </div>
          <div class="card bg-dark text-white">
            <img
              class="card-img"
              src="https://cdn.myanimelist.net/r/160x220/images/anime/1380/106565.webp?s=0c830cdc9d46316ce7dfc579ebd8cdfd"
              alt="Card image"
            />
            <div class="card-img-overlay">
              <h5 class="card-title">Glepnir</h5>
            </div>
          </div>
        </div>
      </article>
      <article>
        <a href="#">Spring 2020 Anime</a>
        <hr />
        <div class="card-deck">
          <div class="card bg-dark text-white">
            <img
              class="card-img"
              src="https://cdn.myanimelist.net/r/160x220/images/anime/1380/106565.webp?s=0c830cdc9d46316ce7dfc579ebd8cdfd"
              alt="Card image"
            />
            <div class="card-img-overlay">
              <h5 class="card-title">Glepnir</h5>
            </div>
          </div>
          <div class="card bg-dark text-white">
            <img
              class="card-img"
              src="https://cdn.myanimelist.net/r/160x220/images/anime/1380/106565.webp?s=0c830cdc9d46316ce7dfc579ebd8cdfd"
              alt="Card image"
            />
            <div class="card-img-overlay">
              <h5 class="card-title">Glepnir</h5>
            </div>
          </div>
          <div class="card bg-dark text-white">
            <img
              class="card-img"
              src="https://cdn.myanimelist.net/r/160x220/images/anime/1380/106565.webp?s=0c830cdc9d46316ce7dfc579ebd8cdfd"
              alt="Card image"
            />
            <div class="card-img-overlay">
              <h5 class="card-title">Glepnir</h5>
            </div>
          </div>
          <div class="card bg-dark text-white">
            <img
              class="card-img"
              src="https://cdn.myanimelist.net/r/160x220/images/anime/1380/106565.webp?s=0c830cdc9d46316ce7dfc579ebd8cdfd"
              alt="Card image"
            />
            <div class="card-img-overlay">
              <h5 class="card-title">Glepnir</h5>
            </div>
          </div>
          <div class="card bg-dark text-white">
            <img
              class="card-img"
              src="https://cdn.myanimelist.net/r/160x220/images/anime/1380/106565.webp?s=0c830cdc9d46316ce7dfc579ebd8cdfd"
              alt="Card image"
            />
            <div class="card-img-overlay">
              <h5 class="card-title">Glepnir</h5>
            </div>
          </div>
          <div class="card bg-dark text-white">
            <img
              class="card-img"
              src="https://cdn.myanimelist.net/r/160x220/images/anime/1380/106565.webp?s=0c830cdc9d46316ce7dfc579ebd8cdfd"
              alt="Card image"
            />
            <div class="card-img-overlay">
              <h5 class="card-title">Glepnir</h5>
            </div>
          </div>
        </div>
      </article>-->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SubHeader from "./core/SubHeader.vue";

export default {
  name: "Home",

  components: {
    SubHeader
  },
  data() {
    return {
      isLoading: false,
      animes: []
    };
  },
  created() {
    this.loadAnimes();
  },

  mounted() {},

  methods: {
    loadAnimes() {
      this.isLoading = true;
      axios.get(`https://localhost:44331/api/anime/1/5`).then(data => {
        this.animes.push(data);

        axios.get(`https://localhost:44331/api/anime/2/5`).then(data => {
          this.animes.push(data);
          this.isLoading = false;
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
</style>
