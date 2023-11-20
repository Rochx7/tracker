import { NOTIFY } from "@/store/type-mutations"
import { TypeNotification } from "@/interfaces/INotifications"
import {store} from "@/store"

export const notifyMixin = {
  methods:{
    notify(type:TypeNotification, title:string,text:string):void{
      store.commit(NOTIFY,{
        title,
        text,
        type
      })
    }
  } 
}