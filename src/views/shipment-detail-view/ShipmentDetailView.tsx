/** @jsx jsx */
import * as React from 'react'
import { RouteChildrenProps } from 'react-router'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'typesafe-actions'
import styled from '@emotion/styled/macro'
import { css, jsx } from '@emotion/core'

import _ from 'lodash'

import Typography from '@material-ui/core/Typography'

import { ViewContainer, EditNameDialog, TransitOverview } from 'components'
import { shipmentsSelectors, shipmentsActions } from 'features/shipments'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'

const Shipment = styled(Typography)``

const ShipmentId = styled.span`
  color: #3f51b5;
`

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  width: 100%;
  margin: 5px 0;

  text-align: left;

  border-bottom: solid thin lightgray;

  justify-items: flex-start;
`

const Column = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  width: 100%;
  min-width: 130px;
  min-height: 1.6rem;
  margin: 4px 0;
`

const Row: React.FC<{ name: string; value: string }> = ({ name, value }) => {
  return (
    <RowContainer>
      <Column>
        <Typography color="textSecondary">{name}</Typography>
      </Column>
      <Column>
        <Typography>{value}</Typography>
      </Column>
    </RowContainer>
  )
}

export const ShipmentDetailView: React.FC<
  RouteChildrenProps<{ id: string }>
> = ({ match }) => {
  // HOOKS:
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()
  const shipment = useSelector((state: RootState) => {
    return shipmentsSelectors.getShipmentByID(
      state,
      (match && match.params.id) || ''
    )
  })

  // EARLY RETURN
  if (!shipment) return null

  // HANDLER & VARIABLES
  const handleOnNameEdit = (name: string): void => {
    dispatch(shipmentsActions.editShipmentName({ name, id: shipment.id }))
  }

  const customs = _.some(shipment.services, ['type', 'customs']) ? 'yes' : 'no'
  const insurance = _.some(shipment.services, ['type', 'insurance'])
    ? 'yes'
    : 'no'

  // VIEW
  return (
    <ViewContainer title={'Shipment Details'}>
      <Shipment component="h2" variant="h4">
        Shipment <ShipmentId>{shipment.id}</ShipmentId>
      </Shipment>
      <Link to={'/'}>
        <Typography variant="caption">&#60; Back to list</Typography>
      </Link>
      <Card
        css={css`
          margin-top: 30px;
        `}
      >
        <CardHeader
          title={shipment.name}
          css={css`
            background-color: #e6e6e6;
          `}
          action={
            <IconButton aria-label="Settings" onClick={() => setOpen(true)}>
              <EditIcon />
            </IconButton>
          }
        />
        <CardContent>
          <TransitOverview
            cargo={shipment.cargo}
            origin={shipment.origin}
            destination={shipment.destination}
          />
          <Row name={'Customer reference'} value={shipment.userId} />
          <Row name={'Status'} value={shipment.status} />
          <Row name={'Booking Date'} value={''} />
          <Row name={'Carrier'} value={shipment.mode} />
          <Row name={'Type'} value={shipment.type} />
          <Row name={'Customs'} value={customs} />
          <Row name={'Insurance'} value={insurance} />
          <Row name={'Inspection'} value={''} />
          <Row name={'Dangerous Goods'} value={'no'} />
          <Row name={'Special Equipment'} value={'no'} />
          <Row name={'Total Cost'} value={`${shipment.total} currency`} />
        </CardContent>
      </Card>
      <EditNameDialog
        open={open}
        onClose={() => setOpen(false)}
        shipmentName={shipment.name}
        onNameEdit={handleOnNameEdit}
      />
    </ViewContainer>
  )
}
