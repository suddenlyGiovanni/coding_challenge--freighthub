import * as React from 'react'
import styled from '@emotion/styled/macro'

import Place from '@material-ui/icons/LocationCity'
import Typography from '@material-ui/core/Typography'

const LocationContainer = styled.div`
  position: relative;
  display: block;
  /* background-color: papayawhip; */
`
const PlaceName = styled(Typography)`
  position: absolute;
  bottom: -23px;
`

interface Props {
  name: string
  active: boolean
  alignment: 'left' | 'right'
}

export const Location: React.FC<Props> = ({ name, active, alignment }) => {
  return (
    <LocationContainer>
      <Place color={active ? 'primary' : 'inherit'} />
      <PlaceName
        variant="body2"
        noWrap={true}
        style={{
          [alignment]: 0,
        }}
      >
        {name}
      </PlaceName>
    </LocationContainer>
  )
}
