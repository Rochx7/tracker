import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Tasks from '../views/Tasks.vue'
import Projects from '../views/Projects.vue'
import Form from '../views/Projects/Form.vue'
import List from '../views/Projects/List.vue'

const routes: RouteRecordRaw[] = [
  {
    path:'/',
    component: Tasks
  },
  {
    path:'/projects',
    component: Projects,
    children:[
      {
        path:'',
        component: List
      },
      {
        path:'new',
        component: Form
      },
      {
        path:':id',
        component: Form,
        props: true
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router