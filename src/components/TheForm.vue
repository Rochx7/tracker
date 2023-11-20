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
        <TheTimer @finishCounting="finishCount"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
import TheTimer from './TheTimer.vue'
import {useStore} from 'vuex'
import {key} from '@/store'

export default defineComponent({
    name: 'TheForm',
    emits:['onSaveTask'],
    components: { TheTimer },
    data: () => {
      return {
        description:'',
        idProject:''
      }
    },
    methods:{
      finishCount(time: number) :void{
        this.$emit('onSaveTask',{
          durationInSeconds: time,
          description: this.description,
          project: this.projects.find((project) => project.id === this.idProject)
        })
        this.description = ''
      }
    },
    setup (){
      const store = useStore(key)
      return {
        projects: computed(()=> store.state.projects)
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