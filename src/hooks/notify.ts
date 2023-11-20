import { TypeNotification } from "@/interfaces/INotifications"
import { store } from "@/store"
import { NOTIFY } from "@/store/type-mutations"

type Notify = {
  notify: (type:TypeNotification, title:string, text:string) => void
}

export default (): Notify => {
  const notify = (type:TypeNotification, title:string,text:string):void =>{
    store.commit(NOTIFY,{
      title,
      text,
      type
    })
  }

  return {notify}
}