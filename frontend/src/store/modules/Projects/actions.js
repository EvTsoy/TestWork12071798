export default {
  async loadProjects({ commit }) {
    await axios.get('http://localhost/api/projects').then((res) => {
      commit('loadProjects', res.data);
    });
  },
  async loadProjectDetails({ commit }, id) {
    await axios.get(`http://localhost/api/projects/${id}`).then((res) => {
      console.log(res);
      commit('loadProjectDetails', res.data);
    });
  },
};
