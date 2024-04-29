import { useNavigate } from "react-router-dom"
import Icon from "../atoms/Icon"
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"
import { faCheck, faPencilAlt, faX } from "@fortawesome/free-solid-svg-icons"

export default function TaskItem({ task, toggleTask, deleteTask }) {
  const navigate = useNavigate()

  return (
    <div className="card border-2 w-full hover:scale-[1.1] duration-500">
      <div className="card-body">
        <div className="flex justify-between align-center gap-1">
          <hgroup>
            <h1 className="text-4xl font-bold">{task.title}</h1>
            <div className="flex gap-5 mt-3">
              <span className="text-xs">{task.date}</span>
              <span className="text-xs">{task.is_completed ? 'complete' : 'not complete'}</span>
            </div>
          </hgroup>
          <button
            className="btn my-auto ml-auto btn-sm btn-success"
            onClick={() => navigate(`/task/${task.id}/edit`, {
              state: task
            })}
          >
            <Icon icon={faPencilAlt} />
          </button>
          <button
            className="btn my-auto btn-sm btn-error"
            onClick={deleteTask}
          >
            <Icon icon={faTrashAlt} />
          </button>
          <button disabled={task.is_completed} className={`btn my-auto btn-sm ${task.is_completed ? 'btn-warning' : 'btn-primary'}`} onClick={toggleTask}>
            {task.is_completed ? <Icon icon={faX} /> : <Icon icon={faCheck} />}
          </button>
        </div>
      </div>
    </div>
  )
}