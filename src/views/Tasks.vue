<template>
  <TheForm @onSaveTask="saveTask"/>
    <div class="list">
      <TaskItem v-for="(task, index) in tasks" :key="index" :task="task"/>
      <ComponentBox v-if="listIsEmpty" :listIsEmpty="listIsEmpty">
      Você não esta muito produtivo hoje 🤔
    </ComponentBox>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheForm from '../components/TheForm.vue';
import TaskItem from '../components/TaskItem.vue';
import ComponentBox from '../components/ComponentBox.vue';
import ITask from '../interfaces/ITask'

export default defineComponent({
  name: 'Tasks',
  data: () =>{
    return {
      tasks: [] as ITask[],
    }
  },
  computed:{
    listIsEmpty():boolean{
      return this.tasks.length === 0
    }
  },
  methods:{
    saveTask(task:ITask){
      this.tasks.push(task)
    },
  },
  components:{
    TheForm,
    TaskItem,
    ComponentBox
}
});
</script>

<style>
</style>
