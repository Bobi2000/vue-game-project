<template>
  <transition name="slide-fade">
    <div v-if="show">
      <sub-header message="Categories"></sub-header>
      <div class="container">
        <br />
        <br />
        <div v-for="category in categories" :key="category.id">
          <a class="animeLink" v-bind:href="'/anime/' + category.id">
            <h5>{{category.title}}</h5>
          </a>
          <br />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import SubHeader from "../core/SubHeader.vue";
import categoriesService from "../services/categories.js";
const restCategoriesService = new categoriesService();

export default {
  name: "Categories",

  components: {
    SubHeader
  },

  data() {
    return {
      categories: {},
      show: false
    };
  },
  created() {},

  mounted() {
    this.loadCategories();
  },

  methods: {
    loadCategories() {
      restCategoriesService.loadCategories().then(data => {
        this.categories = data.data;
        this.show = true;
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
