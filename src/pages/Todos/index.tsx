import React, { useState } from 'react'
import { TodoForm, TodoList } from 'components'
import { Todo } from 'interfaces'
import { useReadTodos, useCreateTodo, useUpdateTodo, useDeleteTodo } from 'api'

const Todos = () => {
  const [editTodo, setEditTodo] = useState<Todo>()
  const todos = useReadTodos()
  const createTodo = useCreateTodo()
  const updateTodo = useUpdateTodo()
  const deleteTodo = useDeleteTodo()

  const onSubmitHandler = (name: string) => {
    if (editTodo && editTodo.name !== name) {
      updateTodo(editTodo.id, { name })
      setEditTodo(undefined)
    } else {
      createTodo(name)
    }
  }

  const onEditHandler = (id: string) => {
    const todo = todos.find((item) => item.id === id)
    setEditTodo(todo)
  }

  const onDeleteHandler = (id: string) => {
    deleteTodo(id)
  }

  return (
    <>
      <h1>Todos</h1>
      <TodoForm onSubmit={onSubmitHandler} editValue={editTodo?.name} />
      <TodoList
        todos={todos}
        onEdit={onEditHandler}
        onDelete={onDeleteHandler}
      />
    </>
  )
}

export default Todos
