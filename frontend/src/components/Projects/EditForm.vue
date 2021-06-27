<template>
  <div>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <form v-else @submit.prevent="submitForm">
      <p class="text-danger">{{ error }}</p>
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          placeholder="title"
          id="title"
          v-model="form.title"
        />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Example textarea</label>
        <textarea
          class="form-control"
          id="content"
          rows="3"
          v-model="form.content"
        ></textarea>
      </div>

      <div class="text-end">
        <button class="btn btn-primary">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: false,
    },

    edit: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      form: {
        title: '',
        content: '',
      },
      isLoading: false,
      error: '',
    };
  },

  created() {
    this.loadProjectDetails();
  },

  methods: {
    async loadProjectDetails() {
      if (!this.edit) return;
      this.isLoading = true;
      await this.$store.dispatch('projects/loadProjectDetails', this.id);
      const data = this.$store.getters['projects/project'];
      this.form.title = data.title;
      this.form.content = data.content;
      this.isLoading = false;
    },

    submitForm() {
      if (this.form.title && this.form.content) {
        this.$emit('submitForm', this.form);
      } else {
        this.error = 'Fields cannot be empty';
      }
    },
  },
};
</script>
