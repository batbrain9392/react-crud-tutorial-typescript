import React, { useState, useEffect } from 'react'

interface Props {
  onSubmit: (value: string) => void
  editValue: string | undefined
}

const TodoForm = (props: Props) => {
  const [input, setInput] = useState('')

  useEffect(() => {
    if (props.editValue) {
      setInput(props.editValue)
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
      />
      <button type='submit'>{props.editValue ? 'update' : 'create'}</button>
    </form>
  )
}

export default TodoForm
