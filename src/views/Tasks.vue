<template>
  <TheForm @onSaveTask="saveTask" />
  <div class="list">
    <div class="field search-field">
      <p class="control has-icons-left">
        <input
          class="input"
          type="text"
          placeholder="Type for filter"
          v-model="filter"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-search"></i>
        </span>
      </p>
    </div>
    <div class="list-task">
      <Task
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        @onTaskClick="selectedTask"
      />
    </div>
    <ComponentBox v-if="listIsEmpty" :listIsEmpty="listIsEmpty">
      Você não esta muito produtivo hoje 🤔
    </ComponentBox>
    <Modal :show="selectTask != null">
      <template v-slot:header>
        <p class="modal-card-title">Edit Task</p>
        <button class="delete" aria-label="close" @click="closeModal" />
      </template>
      <template v-slot:body>
        <div class="field">
          <label for="taskDescription" class="label"> Description </label>
          <input
            type="text"
            class="input"
            v-model="selectTask.description"
            id="taskDescription"
          />
        </div>
      </template>
      <template v-slot:footer>
        <button class="button is-success" @click="changeTask">
          Save changes
        </button>
        <button class="button" @click="closeModal">Cancel</button>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from "vue";

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
import Modal from "@/components/Modal.vue";

export default defineComponent({
  name: "Tasks",
  components: {
    TheForm,
    Task,
    ComponentBox,
    Modal,
  },

  setup() {
    const store = useStore();
    store.dispatch(GET_PROJECTS);
    store.dispatch(GET_TASKS);

    const filter = ref("");
    const selectTask = ref<ITask | null>(null);

    watchEffect(() => {
      store.dispatch(GET_TASKS, filter.value);
    });

    const saveTask = (task: ITask): void => {
      store.dispatch(REGISTER_TASK, task);
    };

    const changeTask = () => {
      store.dispatch(EDIT_TASK, selectTask.value).then(() => closeModal());
    };
    const selectedTask = (task: ITask) => {
      selectTask.value = task;
    };
    const closeModal = () => {
      selectTask.value = null;
    };

    return {
      tasks: computed(() => store.state.tasks),
      listIsEmpty: computed(() => store.state.tasks.length === 0),
      saveTask,
      store,
      filter,
      selectedTask,
      selectTask,
      changeTask,
      closeModal,
    };
  },
});
</script>

<style scoped>
.list-task {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
}
.search-field {
  padding: 0 16px;
}
</style>
