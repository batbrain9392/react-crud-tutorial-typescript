import React, { useState } from 'react'
import { TodoForm, TodoList } from 'components'
import { Todo } from 'types'
import { useReadTodos, useCreateTodo, useUpdateTodo, useDeleteTodo } from 'api'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      display: 'grid',
      gridGap: theme.spacing(5),
      margin: theme.spacing(5, 0),
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
    <Container maxWidth='sm'>
      <Box className={classes.grid}>
        <Typography variant='h2'>Todos</Typography>
        <TodoForm onSubmit={onSubmitHandler} editValue={editTodo?.name} />
        <TodoList
          todos={todos}
          onEdit={onEditHandler}
          onDelete={onDeleteHandler}
        />
      </Box>
    </Container>
  )
}

export default Todos
