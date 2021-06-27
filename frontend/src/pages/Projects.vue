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
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <div
          v-else
          class="card mt-4"
          v-for="(project, index) in projects"
          :key="`project-${index}`"
        >
          <div class="card-header">
            <span
              >Posted by {{ project.user.name }} on
              {{ project.created_at }}</span
            >
            <div class="card_actions float-end">
              <router-link :to="`${this.$route.path}/${project.id}/edit`">
                <img src="../assets/images/pencil.svg" alt="" class="me-3" />
              </router-link>
              <a href="" @click.prevent="deleteProject(project.id)">
                <img src="../assets/images/bin.svg" alt="" />
              </a>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">
              {{ truncateP(project.content) }}
            </p>
            <router-link
              :to="`${this.$route.path}/${project.id}`"
              class="btn btn-primary"
              >Read more...</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },

  created() {
    if (!User.loggedIn()) {
      this.$router.push({ name: 'Login' });
    } else {
      this.loadProjects();
    }
  },

  methods: {
    async loadProjects() {
      this.isLoading = true;
      await this.$store.dispatch('projects/loadProjects');
      this.isLoading = false;
    },

    truncateP(str) {
      return str.length > 47 ? str.substr(0, 47 - 1) + '...' : str;
    },

    deleteProject(id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(async (result) => {
        if (result.value) {
          await this.$store.dispatch('projects/deleteProject', id);
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        }
      });
    },
  },

  computed: {
    projects() {
      return this.$store.getters['projects/projects'];
    },
  },
};
</script>
