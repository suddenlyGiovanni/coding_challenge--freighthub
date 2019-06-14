import * as React from 'react'

import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import { TransportMode } from 'components'

interface State {
  sea: boolean
  air: boolean
  rail: boolean
}

export interface Props {
  initialValues?: State
  onChange: (values: State) => void
}
export const ShipmentMode: React.FC<Props> = ({
  initialValues = { sea: true, air: true, rail: true },
  onChange,
}) => {
  const [state, setState] = React.useState<State>(initialValues)

  const handleChange = (name: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const stateSnapshot = { ...state, [name]: event.target.checked }
    setState(stateSnapshot)
    onChange(stateSnapshot)
  }

  const { sea, air, rail } = state

  return (
    <FormControl component="fieldset">
      <FormGroup style={{ flexDirection: 'row' }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={sea}
              onChange={handleChange('sea')}
              value="sea"
              icon={<TransportMode checked={false} mode={'sea'} />}
              checkedIcon={<TransportMode checked={true} mode={'sea'} />}
            />
          }
          label="Sea"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={air}
              onChange={handleChange('air')}
              value="air"
              icon={<TransportMode checked={false} mode={'air'} />}
              checkedIcon={<TransportMode checked={true} mode={'air'} />}
            />
          }
          label="Air"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={rail}
              onChange={handleChange('rail')}
              value="rail"
              icon={<TransportMode checked={false} mode={'rail'} />}
              checkedIcon={<TransportMode checked={true} mode={'rail'} />}
            />
          }
          label="Rail"
        />
      </FormGroup>
    </FormControl>
  )
}
