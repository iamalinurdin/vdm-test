export default function TaskItem({ title, date, isComplete }) {
  return (
    <div className="card border-2 w-full">
      <div className="card-body">
        <div className="flex justify-between align-center">
          <hgroup>
            <h1 className="text-4xl font-bold">{title}</h1>
            <div className="flex gap-5 mt-3">
              <span className="text-xs">{date}</span>
              <span className="text-xs">{isComplete ? 'complete' : 'not finish'}</span>
            </div>
          </hgroup>
          <button className="btn my-auto">
            Set as Done
          </button>
        </div>
      </div>
    </div>
  )
}