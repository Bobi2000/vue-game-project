<template>
  <div class="card container">
    <article class="card-body">
      <h4 class="card-title mb-4 mt-1">Add An Anime</h4>
      <form>
        <div class="form-group">
          <label>Name</label>
          <input name class="form-control" placeholder="Name" type="text" />
        </div>
        <div class="form-group">
          <label>URL Thumbnail</label>
          <input name class="form-control" placeholder="URL Thumbnail" type="text" />
        </div>
        <div class="form-group">
          <label>URL Trailer</label>
          <input name class="form-control" placeholder="URL Thumbnail" type="text" />
        </div>
        <div class="form-group">
          <label>Synopsis</label>
          <input name class="form-control" placeholder="Synopsis" type="text" />
        </div>
        <div class="form-group container">
          <button type="button" class="btn btn-primary btn-block">Create An Anime</button>
        </div>
      </form>
    </article>
  </div>
</template>

<script>
export default {
  name: "CreateAnime",
  props: {
    msg: String
  }
};
</script>

<style scoped>
</style>
