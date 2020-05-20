import React from 'react'
import TodoItem from '../TodoItem'
import { Todo } from 'types'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
  })
)

interface Props {
  todos: Todo[]
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

const TodoList = (props: Props) => {
  const classes = useStyles()

  return props.todos.length ? (
    <div className={classes.root}>
      <List>
        {props.todos.map((todo, i) => (
          <TodoItem
            key={todo.id}
            index={i + 1}
            value={todo.name}
            onEdit={() => props.onEdit(todo.id)}
            onDelete={() => props.onDelete(todo.id)}
          />
        ))}
      </List>
    </div>
  ) : (
    <Typography variant='body1' gutterBottom>
      No todos for today
    </Typography>
  )
}

export default TodoList
