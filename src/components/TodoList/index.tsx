import React from 'react'
import TodoItem from '../TodoItem'
import { Todo } from '../../interfaces/Todo'

interface Props {
  todos: Todo[]
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

const TodoList = (props: Props) => {
  return props.todos.length ? (
    <>
      <h3>Todo list</h3>
      <ol>
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            value={todo.name}
            onEdit={() => props.onEdit(todo.id)}
            onDelete={() => props.onDelete(todo.id)}
          />
        ))}
      </ol>
    </>
  ) : (
    <p>No todos for today</p>
  )
}

export default TodoList
