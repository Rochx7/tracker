<template>
  <div class="box form">
    <div class="columns">
      <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="description">
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="idProject">
            <option value="">Select project</option>
            <option
              :value="project.id"
              v-for="project in projects"
              :key="project.id"
            >
              {{ project.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <TheTimer @finishCounting="saveTask"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from 'vue'
import TheTimer from './TheTimer.vue'
import {useStore} from 'vuex'
import {key} from '@/store'

export default defineComponent({
    name: 'TheForm',
    emits:['onSaveTask'],
    components: { TheTimer },

    setup(props, context){
      const store = useStore(key)
      const projects =  computed(()=> store.state.project.projects) 
      const description = ref("")
      const idProject = ref("")

      const saveTask = (time: number) :void => {
        context.emit('onSaveTask',{
          durationInSeconds: time,
          description: description.value,
          project: projects.value.find((project) => project.id === idProject.value)
        })
        description.value = ''
      }

      return {
        description,
        idProject,
        projects,
        saveTask,
      }
    }
})

</script>

<style>
.form {
  color:var(--text-primary);
  background-color:var(--bg-primary)
}
</style>