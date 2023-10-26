<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SideBar/>
    </div>
    <div class="column is-three-quarter">
      <TheForm/>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SideBar from './components/SideBar.vue'
import TheForm from './components/TheForm.vue';

export default defineComponent({
  name: 'App',
  components:{
    SideBar,
    TheForm
  }
});
</script>

<style>

</style>
