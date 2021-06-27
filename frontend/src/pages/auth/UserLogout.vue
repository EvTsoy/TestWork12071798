<template> </template>

<script>
export default {
  created() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    Toast.fire({
      icon: 'success',
      title: 'Logout successfully',
    });
    this.$router.replace({ name: 'Welcome' });
  },
};
</script>
