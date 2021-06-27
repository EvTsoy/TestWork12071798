export default {
  async loadProjects({ commit }) {
    await axios.get('http://localhost/api/projects').then((res) => {
      commit('loadProjects', res.data);
    });
  },

  async loadProjectDetails({ commit }, id) {
    await axios.get(`http://localhost/api/projects/${id}`).then((res) => {
      commit('loadProjectDetails', res.data);
    });
  },

  async createProject({ commit }, payload) {
    await axios.post(`http://localhost/api/projects`, payload).then((res) => {
      // console.log(res);
      // commit('createProject', res.data);
    });
  },

  async patchProject({ commit }, form) {
    await axios
      .put(`http://localhost/api/projects/${form.id}`, form)
      .then((res) => {
        // console.log(res);
        // commit('patchProject', res.data);
      });
  },
  async deleteProject({ commit }, id) {
    await axios.delete(`http://localhost/api/projects/${id}`).then((res) => {
      commit('deleteProject', id);
    });
  },
};
