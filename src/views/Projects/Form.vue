<template>
  <section >
    <form @submit.prevent="save">
      <div class="field">
        <label for="project-name" class="label">
          Project Name
        </label>
        <input type="text" class="input" v-model="projectName" id="project-name"/>
      </div>
      <div class="field">
        <button class="button" type="submit" :disabled="!projectName">Save</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import {useStore} from '@/store'
import { defineComponent } from 'vue';
import {ADD_PROJECT,EDIT_PROJECT} from "@/store/type-mutations"
import {TypeNotification} from "@/interfaces/INotifications"
import useNotify from "@/hooks/notify"

export default defineComponent({
  name: 'Form',
  props:{
    id: {
      type: String
    }
  },
  mounted() {
      if(this.id){
        const project = this.store.state.projects.find((project)=> project.id === this.id)
        this.projectName = project?.name || ''
      }
  },
  data() {
    return{
      projectName: ""
    };
  },
  setup(){
    const store = useStore()
    const { notify } = useNotify()
    return {
      store,
      notify
    }
  },
  methods: {
    save(){
      if (this.id) {
        this.store.commit(EDIT_PROJECT,{id: this.id, name:this.projectName})
      } else {
        this.store.commit(ADD_PROJECT, this.projectName)
      }
      this.projectName = ''
      this.notify(TypeNotification.SUCCESS,  "Ready!👌", "Your new project is now available.")
      this.$router.push('/projects')
    },
  },
})
</script>
