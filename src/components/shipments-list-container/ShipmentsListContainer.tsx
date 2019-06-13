import * as React from 'react'
import styled from '@emotion/styled/macro'
import Pagination from 'material-ui-flat-pagination'

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

const PaginationStyled = styled(Pagination)`
  text-align: center;
`

export const Page: React.FC<{
  shipments: Shipments
  onSelectedShipment: (shipmentId: string) => void
}> = ({ shipments, onSelectedShipment }) => {
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

interface Props {
  shipments: Shipments[]
  onSelectedShipment: (shipmentId: string) => void
}

export const ShipmentsListContainer: React.FC<Props> = ({
  shipments,
  onSelectedShipment,
}) => {
  const [offset, setOffset] = React.useState(0)
  const pages = shipments.length

  return (
    <div>
      <PaginationStyled
        limit={1}
        offset={offset}
        total={pages}
        onClick={(e, offset) => setOffset(offset)}
      />

      {shipments && (
        <Page
          shipments={shipments[offset]}
          onSelectedShipment={onSelectedShipment}
        />
      )}
    </div>
  )
}
