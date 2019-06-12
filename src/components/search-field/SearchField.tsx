import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Search from '@material-ui/icons/Search'

interface Props {
  onSearchChange: (value: string) => void
  initialValue?: string
}

export const SearchField: React.FC<Props> = ({
  onSearchChange,
  initialValue = '',
}) => {
  const [value, setValue] = React.useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const _value = event.target.value
    setValue(_value)
    onSearchChange(_value)
  }

  return (
    <TextField
      id="search"
      label="Search"
      placeholder="Search"
      value={value}
      margin="none"
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" aria-label="search" disableTouchRipple>
              <Search />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}
