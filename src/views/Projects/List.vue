<template>
  <section>
    <router-link to="/projects/new" class="button is-primary is-outlined">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>New Project</span>
    </router-link>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.id }}</td>
          <td>{{ project.name }}</td>
          <td>
            <router-link :to="`/projects/${project.id}`" class="button">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </router-link>
            <button class="button ml-2 is-danger" @click="remove(project.id)">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { computed, defineComponent } from "vue";
import { GET_PROJECTS, REMOVE_PROJECT } from "@/store/type-actions";

export default defineComponent({
  name: "List",
  methods: {
    remove(id: string) {
      this.store.dispatch(REMOVE_PROJECT, id);
    },
  },
  setup() {
    const store = useStore();
    store.dispatch(GET_PROJECTS);
    return {
      projects: computed(() => store.state.project.projects),
      store,
    };
  },
});
</script>

<style scoped>
.table {
  margin-top: 1rem;
}
.button.is-primary.is-outlined {
  background-color: transparent;
  border-color: var(--text-light-green);
  color: var(--text-light-green);
}
.button.is-primary.is-outlined:hover {
  background-color: var(--text-light-green);
  border-color: var(--text-light);
  color: var(--text-light);
}
</style>
