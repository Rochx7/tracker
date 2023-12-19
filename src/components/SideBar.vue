<template>
  <aside class="menu">
    <h1 class="title">Tracker</h1>
    <p class="menu-label">General</p>
    <ul class="menu-list">
      <li>
        <router-link
          to="/"
          class="link"
          :class="{ 'is-active': isRouteActive('/') }"
        >
          <i class="fas fa-tasks"></i> Tasks
        </router-link>
      </li>
      <li>
        <router-link
          to="/projects"
          class="link"
          :class="{ 'is-active': isRouteActive('/projects') }"
        >
          <i class="fas fa-project-diagram"></i> Projects
        </router-link>
      </li>
    </ul>
    <p class="menu-label">Settings</p>
    <ul class="menu-list">
      <li>
        <div class="button is-primary is-light" @click="changeTheme">
          {{ textButton }}
        </div>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "SideBar",
  emit: ["onChangeTheme"],
  data: () => {
    return {
      darkTheme: false,
    };
  },
  computed: {
    textButton() {
      return this.darkTheme ? "Desativar modo escuro" : "Ativar modo escuro";
    },
  },
  methods: {
    changeTheme() {
      this.darkTheme = !this.darkTheme;
      this.$emit("onChangeTheme", this.darkTheme);
    },
    isRouteActive(route: string) {
      const currentRoute = useRoute();
      return currentRoute.path === route;
    },
  },
});
</script>

<style scoped>
aside {
  width: 100%;
  height: 100%;
  background: var(--background-dark-grey);
  padding: 8px;
}
.nav {
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
  height: 100%;
}
.title-links {
  display: flex;
  align-items: end;
  gap: 24px;
}
.links {
  display: flex;
  gap: 24px;
}
.title {
  text-align: left;
  color: var(--text-light-green);
  margin-right: 24px;
  margin-bottom: 0;
}
h1 {
  padding-top: 0.5rem;
  text-align: center;
}
a {
  color: var(--text-light);
}
.menu-list a.is-active {
  background-color: #16c87e;
}

@media only screen and (max-width: 580px) {
  .title-links {
    flex-direction: column;
    align-items: start;
    gap: 16px;
  }
}
</style>
