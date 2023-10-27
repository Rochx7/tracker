<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="description">
      </div>
      <div class="column">
        <TheTimer @finishCounting="finishCount"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import TheTimer from './TheTimer.vue'
export default defineComponent({
    name: 'TheForm',
    components: { TheTimer },
    data: () => {
      return {description:''}
    },
    methods:{
      finishCount(time: number) :void{
        console.log(this.description,time)
        this.description = ''
      }
    }
})

</script>