<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'Welcome' }"
        >AWORK</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link class="nav-link active" :to="{ name: 'Projects' }"
              >Projects</router-link
            >
          </li>
        </ul>
        <router-link class="btn btn-danger" :to="{ name: 'Logout' }"
          >Logout</router-link
        >
      </div>
    </div>
  </nav>
</template>
