<template>
  <section>
    <strong>{{ timeElapsed }}</strong>
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
    }
  },
  computed: { 
		timeElapsed ():string {
      return new Date(this.timingInSecond * 1000).toISOString().substr(11,8)
		}
	},
})
</script>