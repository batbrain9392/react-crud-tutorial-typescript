import React, { useReducer } from 'react'
import { reducer, init } from './Todo.reducer'

function App() {
  const [{ input, todos, updateIndex }, dispatch] = useReducer(
    reducer,
    null,
    init
  )

  const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'input', payload: event.target.value })
  }

  const onClickAddEditHandler = () => {
    if (input) {
      if (updateIndex === -1) {
        dispatch({ type: 'create', payload: input })
      } else {
        dispatch({ type: 'update', payload: input })
      }
    }
  }

  const onClickEditHandler = (index: number) => {
    dispatch({ type: 'updateStart', index })
  }

  const onClickDeleteHandler = (index: number) => {
    dispatch({ type: 'delete', index })
  }

  return (
    <>
      <h1>App</h1>
      <div>
        <input type='text' value={input} onChange={onChangeInputHandler} />
        <button onClick={onClickAddEditHandler}>
          {updateIndex === -1 ? 'add' : 'update'} todo
        </button>
      </div>
      {todos.length ? (
        <>
          <h3>Todo list</h3>
          <ol>
            {todos.map((todo, i) => (
              <li key={i}>
                <span style={{ marginRight: 15 }}>{todo}</span>
                <button onClick={() => onClickEditHandler(i)}>edit</button>
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
