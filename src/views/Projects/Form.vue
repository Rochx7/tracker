<template>
  <section>
    <form @submit.prevent="save">
      <div class="field">
        <label for="project-name" class="label"> Project Name </label>
        <input
          type="text"
          class="input"
          v-model="projectName"
          id="project-name"
        />
      </div>
      <div class="field">
        <button class="button" type="submit" :disabled="!projectName">
          Save
        </button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { defineComponent, ref } from "vue";
import { TypeNotification } from "@/interfaces/INotifications";
import useNotify from "@/hooks/notify";
import { REGISTER_PROJECT, EDIT_PROJECT } from "@/store/type-actions";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Form",
  props: {
    id: {
      type: String,
    },
  },
  setup(props) {
    const router = useRouter();
    const store = useStore();
    const { notify } = useNotify();
    const projectName = ref("");

    if (props.id) {
      const project = store.state.project.projects.find(
        (project) => project.id == props.id
      );
      projectName.value = project?.name || "";
    }

    const isSuccess = () => {
      projectName.value = "";
      notify(
        TypeNotification.SUCCESS,
        "Ready!👌",
        "Your new project is now available."
      );
      router.push("/projects");
    };

    const save = () => {
      if (props.id) {
        store
          .dispatch(EDIT_PROJECT, { id: props.id, name: projectName.value })
          .then(() => isSuccess());
      } else {
        store.dispatch(REGISTER_PROJECT, projectName.value).then(() => isSuccess());
      }
    };

    return {
      projectName,
      save,
    };
  },
});
</script>
