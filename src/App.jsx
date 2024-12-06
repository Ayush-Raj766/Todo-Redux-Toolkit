import { useState } from 'react'
import './App.css'
import AddTodo from './component/AddTodo'
import Todos from './component/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>learn about redux</h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
