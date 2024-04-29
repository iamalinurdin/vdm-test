import { useDispatch, useSelector } from "react-redux";
import TaskItem from "../components/molecules/TaskItem";
import { useEffect } from "react";
import { addTask, retrieveTasks } from "../redux/tasks/action";
import { useNavigate } from "react-router-dom";

export default function Tasks() {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks)

  useEffect(() => {
    dispatch(retrieveTasks())

    console.log(tasks)
  }, [dispatch])

  return (
    <div className="flex flex-col gap-5">
      {tasks && tasks.map((item, index) => (
        <TaskItem task={item} key={index} />
      ))}
    </div>
  )
}