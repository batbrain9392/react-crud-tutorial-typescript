import React, { useReducer } from 'react'
import { reducer, init } from './Todo.reducer'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

function App() {
  const [{ todos, updateIndex }, dispatch] = useReducer(reducer, null, init)
  const isEditing = updateIndex > -1

  const onSubmitHandler = (value: string) => {
    if (isEditing) {
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
      <TodoForm
        onSubmit={onSubmitHandler}
        isEditing={isEditing}
        editValue={todos[updateIndex]}
      />
      <Todos todos={todos} onEdit={onEditHandler} onDelete={onDeleteHandler} />
    </>
  )
}

export default App
