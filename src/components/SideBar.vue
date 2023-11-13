<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Stopwatch">
    </h1>
    <button class="button" @click="changeTheme">
      {{ textButton }}
    </button>
   <nav class="panel mt-5">
    <ul>
      <li>
        <router-link to="/" class="link">
          <i class="fas fa-tasks"></i>
          Tasks
        </router-link>
      </li>
      <li>
        <router-link  to="/projects" class="link">
          <i class="fas fa-project-diagram"></i>
          Projects
        </router-link>
      </li>
      
    </ul>
   </nav>
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
.panel li {
  margin: 8px 0;
}
.link {
  color: #fff;
}
.link:hover {
  color: #FAF0CA;
}
.link.router-link-active {
  color: #FAF0CA;
}
</style>