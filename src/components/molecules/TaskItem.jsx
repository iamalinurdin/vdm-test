import { useDispatch } from "react-redux"
import { toggleTask } from "../../redux/tasks/action"
import { useNavigate } from "react-router-dom"

export default function TaskItem({ task }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleToggle = () => {
    dispatch(toggleTask({ id: task.id }))
  }

  return (
    <div className="card border-2 w-full">
      <div className="card-body">
        <div className="flex justify-between align-center gap-3">
          <hgroup>
            <h1 className="text-4xl font-bold">{task.title}</h1>
            <div className="flex gap-5 mt-3">
              <span className="text-xs">{task.date}</span>
              <span className="text-xs">{task.isComplete ? 'complete' : 'not finish'}</span>
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
          <button className="btn my-auto" onClick={handleToggle}>
            Set as Done
          </button>
        </div>
      </div>
    </div>
  )
}