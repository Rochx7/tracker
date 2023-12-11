<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <StopWatch :timingInSecond="timingInSecond" />
    <TimeButton icon="fas fa-play" text="Play" :disabled="counting" @onClick="init"/>
    <TimeButton icon="fas fa-stop" text="Stop" :disabled="!counting" @onClick="finalize"/>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from 'vue'
import StopWatch from './StopWatch.vue'
import TimeButton from './TimeButton.vue';
export default defineComponent({
    name: 'TheTimer',
    components: { StopWatch, TimeButton },
    emit:['finishCounting'],
    setup(props, context) {

      const counting = ref(false)
      const stopwatch = ref(0)
      const timingInSecond = ref(0)

      const init = () => {
          counting.value = true
            stopwatch.value = setInterval(() => {
                timingInSecond.value += 1;
            }, 1000);
        }
        const finalize = () => {
            counting.value = false
            clearInterval(stopwatch.value);
            context.emit('finishCounting', timingInSecond.value)
            timingInSecond.value = 0
        }
      return {
            timingInSecond,
            stopwatch,
            counting: computed(()=> counting.value),
            init,
            finalize,
        };        
    },    
})

</script>