import { useDispatch, useSelector } from "react-redux";
import TaskItem from "../components/molecules/TaskItem";
import { useEffect } from "react";
import { deleteTask, retrieveTasks, toggleTask } from "../redux/tasks/action";

export default function Tasks() {
  const dispatch = useDispatch()
  const { tasks } = useSelector((state) => state)
  const handleToggle = (id) => {
    dispatch(toggleTask(id))
  }
  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div className="flex flex-col gap-5">
      {tasks && tasks.map((item, index) => (
        <TaskItem
          task={item}
          toggleTask={() => handleToggle(item.id)}
          deleteTask={() => handleDelete(item.id)}
          key={index}
        />
      ))}
    </div>
  )
}