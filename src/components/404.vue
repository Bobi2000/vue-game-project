<template>
  <div>
    <a href="/" class="animeLink">
      <sub-header message="Go back to home"></sub-header>
    </a>
    <div class="container">
      <img
        src="https://vignette.wikia.nocookie.net/fategrandorder/images/1/1d/Error404.png/revision/latest?cb=20170204102207"
      />
    </div>
  </div>
</template>

<script>
import SubHeader from "./core/SubHeader.vue";

export default {
  name: "404",

  components: {
    SubHeader,
  },
};
</script>

<style scoped>
.animeLink {
  text-decoration: none;
  color: black;
}
</style>
