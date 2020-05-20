import React, { useState } from 'react'
import { TodoForm, TodoList } from 'components'
import { Todo } from 'types'
import { useReadTodos, useCreateTodo, useUpdateTodo, useDeleteTodo } from 'api'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4, 0),
    },
  })
)

const Todos = () => {
  const classes = useStyles()
  const [editTodo, setEditTodo] = useState<Todo>()
  const todos = useReadTodos()
  const createTodo = useCreateTodo()
  const updateTodo = useUpdateTodo()
  const deleteTodo = useDeleteTodo()

  const onSubmitHandler = (name: string) => {
    if (editTodo) {
      if (editTodo.name !== name) {
        updateTodo(editTodo.id, { name })
      }
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
    <Container maxWidth='sm' className={classes.root}>
      <Typography variant='h2' gutterBottom>
        Todos
      </Typography>
      <TodoForm onSubmit={onSubmitHandler} editValue={editTodo?.name} />
      <TodoList
        todos={todos}
        onEdit={onEditHandler}
        onDelete={onDeleteHandler}
      />
    </Container>
  )
}

export default Todos
