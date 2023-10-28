<template>
  <section >
    <strong class="display" :class="{'box-task': hasTask}">{{ timeElapsed }}</strong>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent ({
  name: 'StopWatch',
  props:{
    timingInSecond:{
      type: Number,
      default:0
    },
    hasTask:{
      type: Boolean
    }
  },
  computed: { 
		timeElapsed ():string {
      return new Date(this.timingInSecond * 1000).toISOString().substr(11,8)
		}
	},
})
</script>

<style scoped>
.display {
  color: var(--text-primary);
}
.box-task{
  color: var(--text-secondary);
}
</style>