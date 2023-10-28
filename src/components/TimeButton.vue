<template>
  <button class="button" @click="onClick" :disabled="disabled">
      <span class="icon">
        <i :class="icon"></i>
      </span>
      <span>{{ text }}</span>
    </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'TimeButton',
    emits:['onClick'],
    props: {
    disabled: {
      type: Boolean
    },
    icon: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
  },
  methods:{
    onClick(){
      this.$emit('onClick')
    }
  }
  })
</script>