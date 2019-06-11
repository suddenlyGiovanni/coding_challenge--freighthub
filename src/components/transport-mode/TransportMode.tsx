import * as React from 'react'

import Train from '@material-ui/icons/Train'
import Plane from '@material-ui/icons/Flight'
import Ship from '@material-ui/icons/DirectionsBoat'

import { Mode } from 'features/shipments/typings'

interface Props {
  mode: Mode
  onClick?: () => void
  checked?: boolean
}
export const TransportMode: React.FC<Props> = ({
  mode,
  onClick,
  checked = false,
}) => {
  const setColor = checked ? 'primary' : 'inherit'
  const handleClick = () => onClick && onClick()

  switch (mode) {
    case 'air':
      return <Plane onClick={handleClick} color={setColor} />
    case 'sea':
      return <Ship onClick={handleClick} color={setColor} />
    case 'rail':
      return <Train onClick={handleClick} color={setColor} />
  }
}
