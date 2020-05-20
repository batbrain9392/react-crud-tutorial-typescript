import React from 'react'
import TodoItem from '../TodoItem'
import { Todo } from 'types'

interface Props {
  todos: Todo[]
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

const TodoList = (props: Props) => {
  return props.todos.length ? (
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
  ) : (
    <>No todos for today</>
  )
}

export default TodoList
