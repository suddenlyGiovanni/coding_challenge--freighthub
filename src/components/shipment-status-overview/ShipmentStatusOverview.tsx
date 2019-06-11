import * as React from 'react'
import styled from '@emotion/styled/macro'
import LinearProgress from '@material-ui/core/LinearProgress'

import { Status } from 'features/shipments/typings'
import { Location } from './Location'

const OverviewContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  height: 100%;
`

const Temp = styled.div`
  position: relative;

  display: block;
  flex: 1;
`

interface Props {
  status: Status
  origin: string
  destination: string
}
export const ShipmentStatusOverview: React.FC<Props> = ({
  status,
  origin,
  destination,
}) => {
  return (
    <OverviewContainer>
      <Location name={origin} active={true} alignment="left" />
      <Temp>
        <LinearProgress
          variant="determinate"
          value={status === 'COMPLETED' ? 100 : 50}
          style={{
            margin: '0 10px',
          }}
        />
      </Temp>
      <Location
        name={destination}
        active={status === 'COMPLETED'}
        alignment="right"
      />
    </OverviewContainer>
  )
}
