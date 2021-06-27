<template>
  <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">A-Work</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">
        Join the world's work marketplace Find great talent. Build your
        business. Take your career to the next level.
      </p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <router-link
          class="btn btn-primary btn-lg px-4 gap-3"
          :to="{ name: 'Login' }"
          >{{ loggedIn ? 'Projects' : 'Login' }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return User.loggedIn();
    },
  },
};
</script>
