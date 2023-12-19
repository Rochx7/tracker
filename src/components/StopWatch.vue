<template>
  <section>
    <strong class="display" :class="{ 'box-task': hasTask }">{{
      timeElapsed
    }}</strong>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "StopWatch",
  props: {
    timingInSecond: {
      type: Number,
      default: 0,
    },
    hasTask: {
      type: Boolean,
    },
  },
  setup(props) {
    return {
      timeElapsed: computed(() =>
        new Date(props.timingInSecond * 1000).toISOString().substr(11, 8)
      ),
    };
  },
});
</script>

<style scoped>
.display {
  color: var(--text-light);
}
.box-task {
  color: var(--text-light);
}
</style>
