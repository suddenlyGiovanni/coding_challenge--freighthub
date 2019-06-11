import * as React from 'react'
import styled from '@emotion/styled/macro'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import { Shipment } from 'features/shipments/typings'
import { TransportMode, ShipmentStatusOverview } from 'components'
import PersonPin from '@material-ui/icons/PersonPin'
import Title from '@material-ui/icons/Title'

const ListElementContainer = styled.li`
  position: relative;

  display: block;

  width: 100%;
  margin-bottom: 10px;

  text-align: unset;
`

const StyledCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  padding: 10px;
`

const HeadingContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  width: 170px;
  min-width: 170px;
  min-height: 90px;
  margin-right: 10px;
`

const HeadingDetail = styled.div`
  display: flex;
  align-content: center;
  flex: 2;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;

  width: 100%;
  height: 100%;
`
const Heading = styled(Typography)`
  width: 100%;
  margin-left: 10px;

  text-align: left;
`

const TrackingContainer = styled.div`
  display: block;
  flex: 3;

  height: 100%;
`

interface Props {
  shipment: Shipment
  onClick: (shipmentId: string) => void
}

export const ShipmentsListElement: React.FC<Props> = ({
  shipment,
  onClick,
}) => {
  if (!shipment) return null

  return (
    <ListElementContainer>
      <Card>
        <CardActionArea onClick={() => onClick(shipment.id)}>
          <StyledCardContent>
            <HeadingContainer>
              <HeadingDetail>
                <TransportMode mode={shipment.mode} />
                <Heading variant="body1">{shipment.id}</Heading>
              </HeadingDetail>
              <HeadingDetail>
                <PersonPin />
                <Heading variant="body1">{shipment.userId}</Heading>
              </HeadingDetail>
              <HeadingDetail>
                <Title />
                <Heading variant="body2" noWrap={true}>
                  {shipment.name}
                </Heading>
              </HeadingDetail>
            </HeadingContainer>

            <TrackingContainer>
              <ShipmentStatusOverview
                status={shipment.status}
                origin={shipment.origin}
                destination={shipment.destination}
              />
            </TrackingContainer>
          </StyledCardContent>
        </CardActionArea>
      </Card>
    </ListElementContainer>
  )
}
