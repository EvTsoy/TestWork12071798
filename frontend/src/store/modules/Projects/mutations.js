export default {
  loadProjects(state, projects) {
    state.projects = projects;
  },

  loadProjectDetails(state, project) {
    state.project = project;
  },

  deleteProject(state, id) {
    state.projects = state.projects.filter((project) => {
      return project.id != id;
    });
  },
};
