import { Outlet, useNavigate } from "react-router-dom"

export default function Layout() {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto p-6 md:p-24">
      <header>
        <nav className="flex gap-3">
          <button onClick={() => navigate('/')} className="btn btn-primary">Home</button>
          <button onClick={() => navigate('/task/create')} className="btn btn-primary">Create</button>
        </nav>
      </header>
      <main className="py-10">
        <Outlet />
      </main>
    </div>
  )
}