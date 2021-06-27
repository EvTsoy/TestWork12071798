<template>
  <div
    class="d-flex justify-content-center align-items-center vh-100 text-center login-page"
  >
    <main class="form-signin">
      <form @submit.prevent="submitForm">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            v-model="form.email"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            v-model="form.password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
      <h1>john@doe.com</h1>
      <h1>password</h1>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
    };
  },

  created() {
    if (User.loggedIn()) {
      this.$router.push({ name: 'Projects' });
    }
  },

  methods: {
    submitForm() {
      axios
        .post('http://localhost/api/auth/login', this.form)
        .then((res) => {
          User.responseAfterLogin(res);
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully',
          });

          this.$router.push({ name: 'Projects' });
        })

        .catch((error) => {
          Toast.fire({
            icon: 'warning',
            title: error,
          });
        });
    },
  },
};
</script>
