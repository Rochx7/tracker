<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Stopwatch">
    </h1>
    <button class="button" @click="changeTheme">
      {{ textButton }}
    </button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent ({
  name: 'SideBar',
  emit:['onChangeTheme'],
  data:()=>{
    return{
      darkTheme:false
    }
  },
  computed:{
    textButton(){
      if(this.darkTheme){
        return 'Desativar modo escuro'
      }
      return 'Ativar modo escuro'
    }
  },
  methods:{
    changeTheme(){
      this.darkTheme = !this.darkTheme
      this.$emit('onChangeTheme', this.darkTheme)
    }
  }
})
</script>

<style scoped>
header{
  background:var(--bg-sideBar);
  width: 100%;
  height: 100vh;
  text-align: center;
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