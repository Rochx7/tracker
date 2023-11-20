
<template>
  <ComponentBox>
    <div class="columns">
      <div class="column is-4">
        {{ task.description || 'Task without description!🚨' }}
      </div>
      <div class="column is-3">
        {{ task.project?.name || 'No project linked to the task!🚨' }}
      </div>
      <div class="column">
        <StopWatch :timingInSecond="task.durationInSeconds" :hasTask="!!task.description"/>
      </div>
    </div>
  </ComponentBox>
</template>

<script lang="ts">
import ITask from '@/interfaces/ITask';
import StopWatch from './StopWatch.vue';
import ComponentBox from './ComponentBox.vue';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name:'TaskItem',
  props:{
    task:{
      type: Object as PropType<ITask>,
        required: true
    }
  },
  components:{ StopWatch, ComponentBox }
})
</script>
