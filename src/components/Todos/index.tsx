import React from 'react'
import Todo from '../Todo'

interface Props {
  todos: string[]
  onEdit: (i: number) => void
  onDelete: (i: number) => void
}

const Todos = (props: Props) => {
  return props.todos.length ? (
    <>
      <h3>Todo list</h3>
      <ol>
        {props.todos.map((todo, i) => (
          <Todo
            key={i}
            value={todo}
            onEdit={() => props.onEdit(i)}
            onDelete={() => props.onDelete(i)}
          />
        ))}
      </ol>
    </>
  ) : (
    <p>No todos for today</p>
  )
}

export default Todos
