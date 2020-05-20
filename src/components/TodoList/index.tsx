import React from 'react'
import TodoItem from '../TodoItem'
import { Todo } from 'types'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(4, 0, 2),
    },
    listContainer: {
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

  return (
    <div className={classes.root}>
      {props.todos.length ? (
        <div className={classes.listContainer}>
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
        'No todos for today'
      )}
    </div>
  )
}

export default TodoList
