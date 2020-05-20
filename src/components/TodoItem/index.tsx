import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

interface Props {
  index: number
  value: string
  onEdit: () => void
  onDelete: () => void
}

const TodoItem = (props: Props) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>{props.index}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={props.value} />
      <ListItemSecondaryAction>
        <IconButton edge='end' aria-label='edit' onClick={props.onEdit}>
          <EditIcon />
        </IconButton>
        <IconButton edge='end' aria-label='delete' onClick={props.onDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default TodoItem
