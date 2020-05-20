import React, { useState, useEffect } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import AddBoxIcon from '@material-ui/icons/AddBox'
import UpdateIcon from '@material-ui/icons/Update'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
)

interface Props {
  onSubmit: (value: string) => void
  editValue: string | undefined
}

const TodoForm = (props: Props) => {
  const classes = useStyles()
  const [input, setInput] = useState('')

  useEffect(() => {
    if (props.editValue) {
      setInput(props.editValue)
    }
  }, [props.editValue])

  const onSubmitHandler = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (input) {
      props.onSubmit(input)
      setInput('')
    }
  }

  return (
    <Paper component='form' className={classes.root} onSubmit={onSubmitHandler}>
      <InputBase
        className={classes.input}
        placeholder='Add todo'
        inputProps={{ 'aria-label': 'add todo' }}
        type='text'
        required
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Divider className={classes.divider} orientation='vertical' />
      <IconButton
        color='primary'
        className={classes.iconButton}
        aria-label='add button'
        type='submit'>
        {props.editValue ? <UpdateIcon /> : <AddBoxIcon />}
      </IconButton>
    </Paper>
  )
}

export default TodoForm
