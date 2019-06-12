import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const status = [
  { value: 'ALL', label: 'All' },
  { value: 'ACTIVE', label: 'In Progress' },
  { value: 'COMPLETED', label: 'Completed' },
]

const useStyles = makeStyles(
  createStyles({
    textField: {
      width: 200,
    },
    menu: {
      width: 200,
    },
  })
)

type State = 'ACTIVE' | 'COMPLETED' | 'ALL'

interface Props {
  onChange: (value: State) => void
  initialValue?: State
}

export const StatusField: React.FC<Props> = ({
  onChange,
  initialValue = 'ALL',
}) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(initialValue)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const _value = event.target.value as State
    setValue(_value)
    onChange(_value)
  }

  return (
    <TextField
      id="status"
      className={classes.textField}
      select
      label="Status"
      value={value}
      onChange={handleChange}
      margin="none"
      SelectProps={{
        MenuProps: {
          className: classes.menu,
        },
      }}
    >
      {status.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )
}
