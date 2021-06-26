<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <edit-form :id="id" edit @submitForm="patchProject"></edit-form>
      </div>
    </div>
  </div>
</template>

<script>
import EditForm from '../components/Projects/EditForm.vue';
export default {
  props: ['id'],
  components: {
    EditForm,
  },

  data() {
    return {
      form: {
        title: '',
        content: '',
      },
    };
  },

  methods: {
    async patchProject(form) {
      await this.$store.dispatch('projects/patchProject', {
        ...form,
        id: this.id,
      });
      this.$router.replace({ name: 'ProjectDetails', id: this.id });
    },
  },
};
</script>
