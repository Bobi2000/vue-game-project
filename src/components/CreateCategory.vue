<template>
  <div>
    <sub-header message="Create A New Category"></sub-header>
    <div class="card container">
      <article class="card-body">
        <h4 class="card-title mb-4 mt-1">Add A Category</h4>
        <form>
          <div class="form-group">
            <label>Category name</label>
            <input name class="form-control" placeholder="Category name" type="text" />
          </div>
          <div class="form-group container">
            <button type="button" class="btn btn-primary btn-block">Create a category</button>
          </div>
        </form>
      </article>
    </div>
  </div>
</template>

<script>
import SubHeader from "./core/SubHeader.vue";

export default {
  name: "CreateCategory",

  components: {
    SubHeader
  }
};
</script>

<style scoped>
</style>
