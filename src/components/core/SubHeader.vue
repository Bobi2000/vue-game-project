<template>
  <div>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <h5>
              <a class="nav-item nav-link active">{{message}}</a>
            </h5>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default 
{
    props: {
        message: {
            type: String,
            required: true
        }
    },
};
</script>

<style scoped>
</style>
