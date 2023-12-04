<template>
  <TheForm @onSaveTask="saveTask" />
  <div class="list">
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Type for filter" v-model="filter" />
        <span class="icon is-small is-left">
          <i class="fas fa-search"></i>
        </span>
      </p>
    </div>
    <Task
      v-for="(task, index) in tasks"
      :key="index"
      :task="task"
      @onTaskClick="selectedTask"
    />
    <ComponentBox v-if="listIsEmpty" :listIsEmpty="listIsEmpty">
      Você não esta muito produtivo hoje 🤔
    </ComponentBox>
    <div class="modal" :class="{ 'is-active': selectTask }" v-if="selectTask">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Edit Task</p>
          <button class="delete" aria-label="close" @click="closeModal" />
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label for="taskDescription" class="label"> Description </label>
            <input
              type="text"
              class="input"
              v-model="selectTask.description"
              id="taskDescription"
            />
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="changeTask">
            Save changes
          </button>
          <button class="button" @click="closeModal">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import TheForm from "../components/TheForm.vue";
import Task from "../components/Task.vue";
import ComponentBox from "../components/ComponentBox.vue";
import ITask from "../interfaces/ITask";
import {
  GET_TASKS,
  REGISTER_TASK,
  GET_PROJECTS,
  EDIT_TASK,
} from "@/store/type-actions";
import { useStore } from "@/store";

export default defineComponent({
  name: "Tasks",
  components: {
    TheForm,
    Task,
    ComponentBox,
  },
  data() {
    return {
      selectTask: null as ITask | null,
    };
  },
  setup() {
    const store = useStore();
    store.dispatch(GET_PROJECTS);
    store.dispatch(GET_TASKS);

    const filter = ref("")
    const tasks = computed(() => store.state.tasks.filter((task) => !filter.value || task.description.includes(filter.value) ))

    return {
      tasks,
      store,
      filter
    };
  },
  computed: {
    listIsEmpty(): boolean {
      return this.tasks.length === 0;
    },
  },
  methods: {
    saveTask(task: ITask): void {
      this.store.dispatch(REGISTER_TASK, task);
    },
    changeTask() {
      this.store
        .dispatch(EDIT_TASK, this.selectTask)
        .then(() => this.closeModal());
    },
    selectedTask(task: ITask) {
      this.selectTask = task;
    },
    closeModal() {
      this.selectTask = null;
    },
  },
});
</script>

<style></style>
