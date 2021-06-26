<template>
  <div class="container">
    <div class="row">
      <div class="offset-md-2 col-md-8 text-end">
        <router-link :to="{ name: 'ProjectCreate' }" class="btn btn-info"
          >Post a project</router-link
        >
      </div>
    </div>

    <div class="row">
      <div class="offset-md-2 col-md-8">
        <div class="card mt-4">
          <div class="card-header">
            <span>Featured</span>
            <i class="fas fa-edit"></i>
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <router-link :to="projectDetailLink" class="btn btn-primary"
              >Go somewhere</router-link
            >
          </div>
        </div>

        <div class="card mt-4">
          <div class="card-header">
            Featured
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div class="card mt-4">
          <div class="card-header">
            Featured
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div class="card mt-4">
          <div class="card-header">
            Featured
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projectDetailLink() {
      return `${this.$route.path}/1`;
    },
  },
};
</script>
