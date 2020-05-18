import React from 'react'

interface Props {
  value: string
  onEdit: () => void
  onDelete: () => void
}

const Todo = (props: Props) => {
  return (
    <li>
      <span style={{ marginRight: 15 }}>{props.value}</span>
      <button onClick={() => props.onEdit()}>edit</button>
      <button onClick={() => props.onDelete()}>delete</button>
    </li>
  )
}

export default Todo
