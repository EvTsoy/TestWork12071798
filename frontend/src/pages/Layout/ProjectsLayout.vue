<template>
  <div>
    <top-navbar></top-navbar>
    <projects-content></projects-content>
  </div>
</template>

<script>
import topNavbar from './TopNavbar.vue';
import projectsContent from './Content.vue';

export default {
  components: {
    topNavbar,
    projectsContent,
  },
};
</script>
