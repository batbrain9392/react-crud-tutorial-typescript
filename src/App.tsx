import React, { useReducer } from 'react'
import { reducer, init } from './Todo.reducer'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

function App() {
  const [{ todos, editIndex }, dispatch] = useReducer(reducer, null, init)

  const onSubmitHandler = (value: string) => {
    if (editIndex > -1) {
      dispatch({ type: 'update', payload: value })
    } else {
      dispatch({ type: 'create', payload: value })
    }
  }

  const onEditHandler = (index: number) => {
    dispatch({ type: 'edit', index })
  }

  const onDeleteHandler = (index: number) => {
    dispatch({ type: 'delete', index })
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
