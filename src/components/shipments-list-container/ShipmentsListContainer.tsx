import * as React from 'react'
import styled from '@emotion/styled/macro'

import { Shipments } from 'features/shipments/typings'
import { ShipmentsListElement } from 'components'

const ListContainer = styled.ul`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  margin-top: 30px;

  list-style-type: unset;

  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
`

interface Props {
  shipments: Shipments
  onSelectedShipment: (shipmentId: string) => void
}

export const ShipmentsListContainer: React.FC<Props> = ({
  shipments = [],
  onSelectedShipment,
}) => {
  return (
    <ListContainer>
      {shipments &&
        shipments.map(shipment => (
          <ShipmentsListElement
            key={shipment.id}
            shipment={shipment}
            onClick={onSelectedShipment}
          />
        ))}
    </ListContainer>
  )
}
