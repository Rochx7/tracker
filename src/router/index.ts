import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Tasks from '../views/Tasks.vue'
import Projects from '../views/Projects.vue'

const routes: RouteRecordRaw[] = [
  {
    path:'/',
    component: Tasks
  },
  {
    path:'/projects',
    component: Projects
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router