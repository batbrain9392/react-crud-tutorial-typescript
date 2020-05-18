import React, { useState, useEffect, useRef } from 'react'

interface Props {
  onSubmit: (value: string) => void
  isEditing: boolean
  editValue: string
}

const TodoForm = (props: Props) => {
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (props.isEditing) {
      setInput(props.editValue)
      inputRef.current?.focus()
    }
  }, [props.isEditing, props.editValue])

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (input) {
      props.onSubmit(input)
      setInput('')
    }
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type='text'
        required
        value={input}
        onChange={(e) => setInput(e.target.value)}
        autoFocus
        ref={inputRef}
      />
      <button type='submit'>{props.isEditing ? 'update' : 'add'}</button>
    </form>
  )
}

export default TodoForm
