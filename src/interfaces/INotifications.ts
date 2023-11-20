export enum TypeNotification{
  SUCCESS,
  ERROR,
  ATTENTION
}

export interface INotifications {
  title: string,
  text: string,
  type: TypeNotification,
  id: number
}