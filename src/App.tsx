import React, { useState, useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState<string[]>([])
  const [todoInput, setTodoInput] = useState('')
  const [editTodoIndex, setEditTodoIndex] = useState(-1)

  useEffect(() => {
    setTodos([
      'Set up dev environment',
      'Code the app',
      'Deploy to Github Pages',
    ])
  }, [])

  const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value)
  }

  const onClickAddEditHandler = () => {
    if (todoInput) {
      setTodos((todos) =>
        editTodoIndex === -1
          ? [
              ...todos.slice(0, editTodoIndex),
              todoInput,
              ...todos.slice(editTodoIndex + 1),
            ]
          : [...todos, todoInput]
      )
      setTodoInput('')
    }
    setEditTodoIndex(-1)
  }

  const onClickEditHandler = (todo: string, index: number) => {
    setTodoInput(todo)
    setEditTodoIndex(index)
  }

  const onClickDeleteHandler = (index: number) => {
    setTodos((todos) => [...todos.slice(0, index), ...todos.slice(index + 1)])
  }

  return (
    <>
      <h1>App</h1>
      <div>
        <input type='text' value={todoInput} onChange={onChangeInputHandler} />
        <button onClick={onClickAddEditHandler}>
          {editTodoIndex === -1 ? 'edit' : 'add'} todo
        </button>
      </div>
      {todos.length ? (
        <>
          <h3>Todo list</h3>
          <ol>
            {todos.map((todo, i) => (
              <li key={i}>
                <span style={{ marginRight: 15 }}>{todo}</span>
                <button onClick={() => onClickEditHandler(todo, i)}>
                  edit
                </button>
                <button onClick={() => onClickDeleteHandler(i)}>delete</button>
              </li>
            ))}
          </ol>
        </>
      ) : (
        <p>No todos for today</p>
      )}
    </>
  )
}

export default App
