import React, { useState, useEffect, useRef } from 'react'

interface Props {
  onSubmit: (value: string) => void
  editValue: string
}

const TodoForm = (props: Props) => {
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (props.editValue) {
      setInput(props.editValue)
      inputRef.current?.focus()
    }
  }, [props.editValue])

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
      <button type='submit'>{props.editValue ? 'update' : 'add'}</button>
    </form>
  )
}

export default TodoForm
