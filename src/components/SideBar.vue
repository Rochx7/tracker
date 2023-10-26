<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Stopwatch">
    </h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent ({
  name: 'SideBar'
})
</script>

<style scoped>
header{
  background:#0d3b66;
  width: 100%;
  height: 100vh;
}
h1{
  padding-top:0.5rem;
  text-align:center;
}
img{
    max-width:250px;
  };
@media only screen and (max-width: 768px){
  header{
    padding: 2.5rem;
    height: auto;
  }
}
</style>