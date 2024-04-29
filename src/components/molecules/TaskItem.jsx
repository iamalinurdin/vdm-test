import { useNavigate } from "react-router-dom"

export default function TaskItem({ task, toggleTask, deleteTask }) {
  const navigate = useNavigate()

  return (
    <div className="card border-2 w-full">
      <div className="card-body">
        <div className="flex justify-between align-center gap-3">
          <hgroup>
            <h1 className="text-4xl font-bold">{task.title}</h1>
            <div className="flex gap-5 mt-3">
              <span className="text-xs">{task.date}</span>
              <span className="text-xs">{task.is_completed ? 'complete' : 'not complete'}</span>
            </div>
          </hgroup>
          <button
            className="btn my-auto ml-auto"
            onClick={() => navigate(`/task/${task.id}/edit`, {
              state: task
            })}
          >
            Edit
          </button>
          <button
            className="btn my-auto ml-auto"
            onClick={deleteTask}
          >
            Delete
          </button>
          <button className="btn my-auto" onClick={toggleTask}>
            Set as Done
          </button>
        </div>
      </div>
    </div>
  )
}