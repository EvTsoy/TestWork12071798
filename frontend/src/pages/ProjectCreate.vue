<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <edit-form @submitForm="createProject"></edit-form>
      </div>
    </div>
  </div>
</template>

<script>
import EditForm from '../components/Projects/EditForm.vue';
export default {
  components: {
    EditForm,
  },

  methods: {
    async createProject(form) {
      await this.$store.dispatch('projects/createProject', {
        ...form,
        user_id: User.id(),
      });
      this.$router.push({ name: 'Projects' });
    },
  },
};
</script>
