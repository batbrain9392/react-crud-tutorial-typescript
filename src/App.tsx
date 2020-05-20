import React, { useState } from 'react'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([
    'Set up dev environment',
    'Code the app',
    'Deploy to Github Pages',
  ])
  const [editIndex, setEditIndex] = useState(-1)

  const onSubmitHandler = (value: string) => {
    if (editIndex > -1) {
      setTodos((arr) => [
        ...arr.slice(0, editIndex),
        value,
        ...arr.slice(editIndex + 1),
      ])
      setEditIndex(-1)
    } else {
      setTodos((todos) => [...todos, value])
    }
  }

  const onEditHandler = (index: number) => {
    setEditIndex(index)
  }

  const onDeleteHandler = (index: number) => {
    setTodos((arr) => [...arr.slice(0, index), ...arr.slice(index + 1)])
    setEditIndex(-1)
  }

  return (
    <>
      <h1>App</h1>
      <TodoForm onSubmit={onSubmitHandler} editValue={todos[editIndex]} />
      <Todos todos={todos} onEdit={onEditHandler} onDelete={onDeleteHandler} />
    </>
  )
}

export default App
