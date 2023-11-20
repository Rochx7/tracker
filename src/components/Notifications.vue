<template>
  <div class="notifications">
    <article class="message" :class="context[notification.type]" v-for="notification in notifications " :key="notification.id">
      <div class="message-header">
        {{ notification.title }}
      </div>
      <div class="message-body">
        {{ notification.text }}
      </div>
    </article>
   
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';
import {TypeNotification} from "@/interfaces/INotifications"

export default defineComponent({
  name: 'Notifications',
  data(){
    return{
      context:{
        [TypeNotification.SUCCESS]:'is-success',
        [TypeNotification.ATTENTION]:'is-warning',
        [TypeNotification.ERROR]:'is-danger',
      }
    }
  },
  setup() {
      const store = useStore()
      return {
        notifications: computed(() => store.state.notifications)
      }
  },
})
</script>

<style scoped>
  .notifications{
    position: absolute;
    width: 300px;
    right: 0;
    padding: 8px;
    z-index: 999;
  }
</style>