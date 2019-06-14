import * as React from 'react'
import styled from '@emotion/styled/macro'

import { Cargo } from 'features/shipments/typings'
import { Typography } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos'

const OverviewContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  flex-direction: row;
  justify-content: space-between;

  padding: 15px;

  border: solid thin lightgray;
  border-radius: 4px;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

const ElementContainer = styled.div`
  flex: 1;

  max-width: 170px;
`

const CopyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 170px;
  min-height: 50px;
  padding: 4px;

  border: solid thin lightgray;
  border-radius: 4px;
  background-color: lightgray;
`
const Copy = styled(Typography)`
  text-align: center;
`

const CargoList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  list-style-type: unset;

  margin-block-start: unset;
  margin-block-end: unset;
  margin-inline-start: unset;
  margin-inline-end: unset;
  padding-inline-start: unset;
`

const CargoElement = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  margin: 5px 0;
  padding: 5px;

  text-align: center;

  border: solid thin grey;
  border-radius: 4px;
`

export interface Props {
  origin: string
  destination: string
  cargo: Cargo[]
}
export const TransitOverview: React.FC<Props> = ({
  origin,
  destination,
  cargo,
}) => {
  return (
    <OverviewContainer>
      <ElementContainer>
        <CopyContainer>
          <Copy>{origin}</Copy>
        </CopyContainer>
      </ElementContainer>

      <ArrowForwardIcon />

      <ElementContainer>
        <CargoList>
          {cargo.map(({ description, type, volume }, idx) => (
            <CargoElement key={idx}>
              <Typography variant="body2">
                {`${description} - ${volume}vol`}
              </Typography>
            </CargoElement>
          ))}
        </CargoList>
      </ElementContainer>

      <ArrowForwardIcon />

      <ElementContainer>
        <CopyContainer>
          <Copy>{destination}</Copy>
        </CopyContainer>
      </ElementContainer>
    </OverviewContainer>
  )
}
