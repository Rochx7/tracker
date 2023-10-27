<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <StopWatch :timingInSecond="timingInSecond" />
    <button class="button" @click="init" :disabled="counting">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>Play</span>
    </button>
    <button class="button" @click="finalize" :disabled="!counting"> 
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>Stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import StopWatch from './StopWatch.vue'
export default defineComponent({
    name: 'TheTimer',
    emit:['finishCounting'],
    data: () => {
        return {
            timingInSecond: 0,
            stopwatch: 0,
            counting: false
        };
    },
    methods: {
        init() {
          this.counting = true
            this.stopwatch = setInterval(() => {
                this.timingInSecond += 1;
            }, 1000);
        },
        finalize() {
          this.counting = false
            clearInterval(this.stopwatch);
            this.$emit('finishCounting', this.timingInSecond)
            this.timingInSecond = 0
        }
    },
    components: { StopWatch }
})

</script>