import { ActionType } from "./action";

// [
//   {
//     id: 'task-2024-05-01-abc',
//     title: 'tidur',
//     date: '2024-05-01',
//     is_completed: false
//   },
//   {
//     id: 'task-2024-05-02-abc',
//     title: 'makan',
//     date: '2024-05-02',
//     is_completed: false
//   },
// ]

export default function taskReducer(tasks = [
  {
    id: 'task-2024-05-01-abc',
    title: 'tidur',
    date: '2024-05-01',
    is_completed: false
  },
  {
    id: 'task-2024-05-02-abc',
    title: 'makan',
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
      return tasks
    case ActionType.TOGGLE_TASK:
      return tasks
    case ActionType.UPDATE_TASK:
      return tasks
    default:
      return tasks
  }
}