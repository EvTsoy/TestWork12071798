<template>
  <div class="container">
    <div class="row">
      <div class="offset-md-2 col-md-8 text-end">
        <a @click="$router.go(-1)" class="btn btn-primary">Back</a>
      </div>
    </div>
    <h1 class="text-center">Project Details</h1>
    <div class="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <h1>{{ project.title }}</h1>
        <p class="fs-5 col-md-8">
          {{ project.content }}
        </p>

        <hr class="col-3 col-md-2 mb-5" />

        <div class="row g-5">
          <div class="col-md-6">
            <h2>Starter projects</h2>
            <p>
              Ready to beyond the starter template? Check out these open source
              projects that you can quickly duplicate to a new GitHub
              repository.
            </p>
            <ul class="icon-list">
              <li>
                <a
                  href="https://github.com/twbs/bootstrap-npm-starter"
                  rel="noopener"
                  target="_blank"
                  >Bootstrap npm starter</a
                >
              </li>
              <li class="text-muted">
                Bootstrap Parcel starter (coming soon!)
              </li>
            </ul>
          </div>

          <div class="col-md-6">
            <h2>Guides</h2>
            <p>
              Read more detailed instructions and documentation on using or
              contributing to Bootstrap.
            </p>
            <ul class="icon-list">
              <li>
                <a href="/docs/5.0/getting-started/introduction/"
                  >Bootstrap quick start guide</a
                >
              </li>
              <li>
                <a href="/docs/5.0/getting-started/webpack/"
                  >Bootstrap Webpack guide</a
                >
              </li>
              <li>
                <a href="/docs/5.0/getting-started/parcel/"
                  >Bootstrap Parcel guide</a
                >
              </li>
              <li>
                <a href="/docs/5.0/getting-started/build-tools/"
                  >Contributing to Bootstrap</a
                >
              </li>
            </ul>
          </div>
        </div>
      </main>
      <footer class="pt-5 my-5 text-muted border-top">
        Created by the Bootstrap team · © 2021
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],

  computed: {
    project() {
      return this.$store.getters['projects/project'];
    },
  },

  created() {
    this.loadProjectDetails();
  },

  methods: {
    loadProjectDetails() {
      this.$store.dispatch('projects/loadProjectDetails', this.id);
    },
  },
};
</script>
