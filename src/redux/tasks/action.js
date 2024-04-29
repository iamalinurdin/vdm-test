const ActionType = {
  RETRIEVE_TASK: 'RETRIEVE_TASK',
  ADD_TASK: 'ADD_TASK',
  TOGGLE_TASK: 'TOGGLE_TASK',
  UPDATE_TASK: 'UPDATE_TASK',
  DELETE_TASK: 'DELETE_TASK',
}

function retrieveTasks(tasks) {
  return {
    type: ActionType.RETRIEVE_TASK,
    payload: {
      tasks
    }
  }
}

function addTask(task) {
  return {
    type: ActionType.ADD_TASK,
    payload: {
      task
    }
  }
}

function toggleTask(id) {
  return {
    type: ActionType.TOGGLE_TASK,
    payload: {
      id
    }
  }
}

function updateTask(id, task) {
  return {
    type: ActionType.UPDATE_TASK,
    payload: {
      id,
      task
    }
  }
}

function deleteTask(id) {
  return {
    type: ActionType.DELETE_TASK,
    payload: {
      id
    }
  }
}

export {
  ActionType,
  retrieveTasks,
  addTask,
  deleteTask,
  toggleTask,
  updateTask
}