<template>
  <header>
    <div class="nav">
      <div class="title-links">
        <h1 class="title">Tracker</h1>

        <div class="links">
          <router-link to="/" class="link">
            <i class="fas fa-tasks"></i> Tasks
          </router-link>
          <router-link to="/projects" class="link">
            <i class="fas fa-project-diagram"></i> Projects
          </router-link>
        </div>
      </div>

      <div class="button" @click="changeTheme">
        {{ textButton }}
      </div>
    </div>
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
      return this.darkTheme ? "Desativar modo escuro" : "Ativar modo escuro";
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
  background: var(--bg-secondary);
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
  color: #efede3;
  margin-right: 24px;
  margin-bottom: 0;
}
h1 {
  padding-top: 0.5rem;
  text-align: center;
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
@media only screen and (max-width: 580px) {
  .title-links {
    flex-direction: column;
    align-items: start;
    gap: 16px;
  }
}
</style>
