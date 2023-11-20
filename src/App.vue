<template>
  <main class="columns is-gapless is-multiline" :class="{'theme-dark': darkThemeEnabled}">
    <div class="column is-one-quarter">
      <SideBar @onChangeTheme="changeTheme"/>
    </div>
    <div class="column is-three-quarter content" >
      <Notifications/>
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SideBar from './components/SideBar.vue'
import Notifications from './components/Notifications.vue'
import ITask from './interfaces/ITask'

export default defineComponent({
  name: 'App',
  data: () =>{
    return {
      tasks: [] as ITask[],
      darkThemeEnabled:false
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
    changeTheme(darkThemeEnabled:boolean){
      this.darkThemeEnabled = darkThemeEnabled
    }
  },
  components:{
    SideBar,
    Notifications
}
});
</script>

<style>
.list{
  padding: 1.25rem
}
main{
  --bg-primary: #F4F5F5;
  --bg-sideBar: #424769;
  --bg-box-primary: #424769;
  --text-primary: #2d3250;
  --text-secondary: #F4F5F5;
}
main.theme-dark{
  --bg-primary: #2d3250;
  --bg-sideBar: #424769;
  --bg-box-primary: #F4F5F5;
  --text-primary: #F4F5F5;
  --text-secondary: #2d3250;
}
.content{
  background-color:var(--bg-primary);
}

</style>
