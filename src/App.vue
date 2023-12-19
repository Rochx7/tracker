<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'theme-dark': darkThemeEnabled }"
  >
    <div class="column is-one-quarter">
      <SideBar @onChangeTheme="changeTheme" />
    </div>
    <div class="column is-three-quarter content">
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
  --link-primary: #16c87e;
  --bg-sideBar: #222120;
  --bg-box-primary: #16c87e;
  --bg-box-secondary: #16c87e;
  --text-primary: #222120;
  --text-secondary: #1e1f1e;
  --background-dark-grey: #1e1f1e;
  --text-light: #efede3;
  --text-light-green: #16c87e;
}
main.theme-dark {
  --bg-primary: #141515;
  --bg-secondary: #16c87e;
  --link-primary: #222120;
  --bg-sideBar: #16c87e;
  --bg-box-primary: #efede3;
  --bg-box-secondary: #222120;
  --text-primary: #efede3;
  --text-secondary: #16c87e;
  --text-light: #efede3;
  --text-light-green: #16c87e;
}
.content {
  width: 100%;
  height: 100vh;
  background-color: var(--bg-primary);
}
</style>
