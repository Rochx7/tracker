<template>
  <ComponentBox>
    <div class="columns click" @click="clickedTask">
      <div class="column is-4">
        {{ task.description || "Task without description!🚨" }}
      </div>
      <div class="column">
        {{ task.project?.name || "No project linked to the task!🚨" }}
      </div>
      <div class="column is-2 has-text-centered">
        <StopWatch
          :timingInSecond="task.durationInSeconds"
          :hasTask="!!task.description"
        />
      </div>
    </div>
  </ComponentBox>
</template>

<script lang="ts">
import ITask from "@/interfaces/ITask";
import StopWatch from "./StopWatch.vue";
import ComponentBox from "./ComponentBox.vue";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Task",
  components: { StopWatch, ComponentBox },
  emits: ["onTaskClick"],
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true,
    },
  },
  setup(props, context) {
    const clickedTask = (): void => {
      context.emit("onTaskClick", props.task);
    };
    return {
      clickedTask,
    };
  },
});
</script>

<style scoped>
.box {
  width: 100%;
}
.click {
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  .has-text-centered {
    text-align: start !important;
  }
}
</style>
