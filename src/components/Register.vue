<template>
  <div class="card container">
    <article class="card-body">
      <a href class="float-right btn btn-outline-primary">Sign in</a>
      <h4 class="card-title mb-4 mt-1">Sign up</h4>
      <form>
        <div class="form-group">
          <label>Your email</label>
          <input name class="form-control" placeholder="Email" type="email" />
        </div>
        <div class="form-group">
          <label>Your password</label>
          <input class="form-control" placeholder="******" type="password" />
        </div>
        <div class="form-group">
          <label>Repeat your password</label>
          <input class="form-control" placeholder="******" type="password" />
        </div>
        <div class="form-group container">
          <button type="button" class="btn btn-primary btn-block">Register</button>
        </div>
      </form>
    </article>
  </div>
</template>

<script>
export default {
  name: "Register",
  props: {
    msg: String
  }
};
</script>

<style scoped>
</style>
