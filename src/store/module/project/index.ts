import clientHttp from "@/http";
import IProject from "@/interfaces/IProject";
import { State } from "@/store";
import { GET_PROJECTS, REGISTER_PROJECT } from "@/store/type-actions";
import { ADD_PROJECT, EDIT_PROJECT, REMOVE_PROJECT, DEFINE_PROJECTS } from "@/store/type-mutations";
import { Module } from "vuex";

export interface ProjectState {
  projects: IProject[];
}

export const project: Module<ProjectState, State> = {
  mutations: {
    [ADD_PROJECT](state, projectName: string) {
      const project = {
        id: new Date().toDateString(),
        name: projectName,
      } as IProject;
      state.projects.push(project);
    },

    [EDIT_PROJECT](state, project: IProject) {
      const index = state.projects.findIndex((proj) => proj.id === project.id);
      state.projects[index] = project;
    },

    [REMOVE_PROJECT](state, id: string) {
      const filterProjects = state.projects.filter((proj) => proj.id !== id);
      state.projects = filterProjects;
    },

    [DEFINE_PROJECTS](state, projects: IProject[]) {
      state.projects = projects;
    },
  },
  actions: {
    [GET_PROJECTS]({ commit }) {
      clientHttp
        .get("projects")
        .then((response) => commit(DEFINE_PROJECTS, response.data));
    },

    [REGISTER_PROJECT](state, projectName: string) {
      return clientHttp.post("projects", {
        name: projectName,
      });
    },

    [EDIT_PROJECT](state, project: IProject) {
      return clientHttp.put(`projects/${project.id}`, project);
    },

    [REMOVE_PROJECT]({ commit }, id: string) {
      return clientHttp
        .delete(`projects/${id}`)
        .then(() => commit("REMOVE_PROJECT", id));
    },
  },
};
