import ITask from "@/interfaces/ITask";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import {NOTIFY, DEFINE_TASKS, ADD_TASK,CHANGE_TASK} from './type-mutations'
import { INotifications } from "@/interfaces/INotifications";
import { GET_TASKS,  REGISTER_TASK, EDIT_TASK} from "./type-actions";
import clientHttp from "@/http";
import { project, ProjectState } from "./module/project";

export interface State {
  tasks: ITask[]
  notifications: INotifications[]
  project: ProjectState
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    project:{ 
      projects:[]
    },
    tasks:[],
    notifications:[]
  },
  mutations: {
    [ADD_TASK](state, task: ITask) {
      state.tasks.push(task)
    },
    
    [CHANGE_TASK](state, task:ITask) {
      const index = state.tasks.findIndex(findTask => findTask.id === task.id)
      state.tasks[index] = task
    },

   [DEFINE_TASKS](state, tasks:ITask[]) {
     state.tasks = tasks
    },

   [NOTIFY](state, newNotification:INotifications) {
     newNotification.id = new Date().getTime()
     state.notifications.push(newNotification)

     setTimeout(()=>{
      state.notifications = state.notifications.filter((notification) => notification.id !== newNotification.id)
     }, 3000)
    }
  },
  actions:{
    [GET_TASKS]({ commit }){
      clientHttp.get('tasks').then(response => commit(DEFINE_TASKS,response.data))
    },

    [REGISTER_TASK]({ commit }, task:ITask) {
      return clientHttp.post('tasks', task).then((response) => commit(ADD_TASK,response.data))
    },

    [EDIT_TASK]({ commit }, task:ITask) {
      return clientHttp.put(`tasks/${task.id}`, task).then((response) => commit(CHANGE_TASK,response.data))
    },
  },
  modules:{
    project
  }
})

export function useStore():Store<State>{
  return vuexUseStore(key)
}