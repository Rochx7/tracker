<template>
  <button class="button" @click="onClick" :disabled="buttonEnabled">
      <span class="icon">
        <i :class="icon"></i>
      </span>
      <span>{{ text }}</span>
    </button>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue';
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
  setup(props, context) {
    const onClick = () =>{
      context.emit('onClick')
    }  

    return{ 
      onClick,
      buttonEnabled: computed(()=> props.disabled),
      ...props
    }
  },
  })
</script>