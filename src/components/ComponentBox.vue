<template>
  <div class="box has-text-weight-bold" :class="{ emptyBox: listIsEmpty }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComponentBox",
  props: {
    listIsEmpty: {
      type: Boolean,
    },
  },
});
</script>
<style scoped>
.box {
  background: var(--bg-box-secondary);
  color: var(--text-light);
}

.emptyBox {
  background-color: var(--bg-box-secondary);
  color: var(--text-light);
}
</style>
