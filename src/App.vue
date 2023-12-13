<template>
  <main :class="{ 'theme-dark': darkThemeEnabled }">
    <SideBar @onChangeTheme="changeTheme" />
    <div class="content">
      <Notifications />
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SideBar from "./components/SideBar.vue";
import Notifications from "./components/Notifications.vue";
import ITask from "./interfaces/ITask";

export default defineComponent({
  name: "App",
  data: () => {
    return {
      tasks: [] as ITask[],
      darkThemeEnabled: false,
    };
  },
  computed: {
    listIsEmpty(): boolean {
      return this.tasks.length === 0;
    },
  },
  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task);
    },
    changeTheme(darkThemeEnabled: boolean) {
      this.darkThemeEnabled = darkThemeEnabled;
    },
  },
  components: {
    SideBar,
    Notifications,
  },
});
</script>

<style>
main {
  --bg-primary: #efede3;
  --bg-secondary: #222120;
  --link-primary: #f68b1b;
  --bg-sideBar: #222120;
  --bg-box-primary: #f68b1b;
  --text-primary: #222120;
  --text-secondary: #efede3;
}
main.theme-dark {
  --bg-primary: #222120;
  --bg-secondary: #f68b1b;
  --link-primary: #222120;
  --bg-sideBar: #f68b1b;
  --bg-box-primary: #efede3;
  --text-primary: #efede3;
  --text-secondary: #222120;
}
.content {
  width: 100%;
  height: 100vh;
  background-color: var(--bg-primary);
}
</style>
