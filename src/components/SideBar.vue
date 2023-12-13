<template>
  <header>
    <nav class="navbar is-transparent p-5">
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-brand mr-5">
          <h1 class="title">Tracker</h1>
        </div>
        <div class="navbar-start">
          <router-link to="/" class="link navbar-item">
            <i class="fas fa-tasks"></i>
            Tasks
          </router-link>

          <router-link to="/projects" class="link navbar-item">
            <i class="fas fa-project-diagram"></i>
            Projects
          </router-link>
        </div>

        <div class="navbar-end">
          <div class="button" @click="changeTheme">
            {{ textButton }}
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
      if (this.darkTheme) {
        return "Desativar modo escuro";
      }
      return "Ativar modo escuro";
    },
  },
  methods: {
    changeTheme() {
      this.darkTheme = !this.darkTheme;
      this.$emit("onChangeTheme", this.darkTheme);
    },
  },
});
</script>

<style scoped>
header {
  width: 100%;

  text-align: center;
}
.navbar {
  background: var(--bg-secondary);
  align-content: center;
  justify-content: center;
}
.navbar-start {
  display: flex;
  gap: 8px;
  align-items: end;
}
.navbar-item {
  display: flex;
  gap: 8px;
}
.title {
  color: #efede3;
}
.button {
  color: var(--bg-sideBar);
}
h1 {
  padding-top: 0.5rem;
  text-align: center;
}
img {
  max-width: 250px;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
.panel li {
  margin: 8px 0;
}
.link {
  color: #efede3;
}
.link:hover {
  color: var(--link-primary);
}
.link.router-link-active {
  color: var(--link-primary);
}
</style>
