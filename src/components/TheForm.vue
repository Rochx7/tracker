<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?">
      </div>
      <div class="column">
        <div class="is-flex is-align-items-center is-justify-content-space-between">
          <StopWatch :timingInSecond="timingInSecond"/>
          <button class="button" @click="init">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <span>Play</span>
          </button>
          <button class="button" @click="finalize">
            <span class="icon">
              <i class="fas fa-stop"></i>
            </span>
            <span>Stop</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import StopWatch from './StopWatch.vue'
export default defineComponent({
    name: 'TheForm',
    data: () => {
        return {
            timingInSecond: 0,
            stopwatch: 0
        };
    },
    methods: {
        init() {
            this.stopwatch = setInterval(() => {
                this.timingInSecond += 1;
            }, 1000);
        },
        finalize() {
            clearInterval(this.stopwatch);
        }
    },
    components: { StopWatch }
})

</script>