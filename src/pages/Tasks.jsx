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
      {tasks.length > 0 ? (
        <>
          {tasks.map((item, index) => (
            <TaskItem
              task={item}
              toggleTask={() => handleToggle(item.id)}
              deleteTask={() => handleDelete(item.id)}
              key={index}
            />
          ))}
        </>
      ) : (
        <h1 className="text-center font-bold text-3xl animate-pulse">you have no task...</h1>
      )}
    </div>
  )
}