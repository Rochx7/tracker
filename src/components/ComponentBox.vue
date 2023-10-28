<template>
<div class="box has-text-weight-bold" :class="{'emptyBox': listIsEmpty}">
<slot></slot>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComponentBox',
  props:{
    listIsEmpty:{
      type: Boolean
    }
  },
  data:()=>{
    return{
      styles:{ 
        
      }
    }
  }
})
</script>
<style scoped>
.box{
  background:var(--bg-box-primary);
  color: var(--text-secondary)
}
.emptyBox{
  background-color: var(--bg-box-primary);
  color: var(--text-secondary);
}
</style>