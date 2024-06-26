import { ActionType } from "./action";

export default function taskReducer(tasks = [
  {
    id: 'task-2024-05-01-abc',
    title: 'Workout and jogging',
    date: '2024-05-01',
    is_completed: false
  },
  {
    id: 'task-2024-05-02-abc',
    title: 'Read a book',
    date: '2024-05-02',
    is_completed: false
  },
], action = {}) {
  switch (action.type) {
    case ActionType.RETRIEVE_TASK:
      return tasks
    case ActionType.ADD_TASK:
      console.log(action.payload.task, tasks)
      return [action.payload.task, ...tasks]
    case ActionType.DELETE_TASK:
      return tasks.filter((item) => {
        return item.id != action.payload.id
      })
    case ActionType.TOGGLE_TASK:
      return tasks.map((item) => {
        if (item.id == action.payload.id) {
          return {
            ...item,
            is_completed: !item.is_completed
          }
        }

        return item
      })
    case ActionType.UPDATE_TASK:
      console.log(action.payload)

      return tasks.map((item) => {
        if (item.id == action.payload.id) {
          return {
            title: action.payload.task.title,
            date: action.payload.task.date,
            is_completed: action.payload.task.is_completed,
          }
        }

        return item
      })
    default:
      return tasks
  }
}