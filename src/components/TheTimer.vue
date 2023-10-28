<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <StopWatch :timingInSecond="timingInSecond" />
    <TimeButton icon="fas fa-play" text="Play" :disabled="counting" @onClick="init"/>
    <TimeButton icon="fas fa-stop" text="Stop" :disabled="!counting" @onClick="finalize"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import StopWatch from './StopWatch.vue'
import TimeButton from './TimeButton.vue';
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
    components: { StopWatch, TimeButton }
})

</script>