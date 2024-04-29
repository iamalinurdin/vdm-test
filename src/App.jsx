import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskItem from './components/molecules/TaskItem'
import { Route, Routes } from 'react-router-dom'
import Tasks from './pages/Tasks'
import FormTask from './pages/FormTask'
import Layout from './components/organisms/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Tasks />} />
        <Route path='/task/create' element={<FormTask />} />
        <Route path='/task/:id/edit' element={<FormTask />} />
      </Route>
    </Routes>
  )
}

export default App
