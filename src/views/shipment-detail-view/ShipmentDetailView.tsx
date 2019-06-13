/** @jsx jsx */
import * as React from 'react'
import { RouteChildrenProps } from 'react-router'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'typesafe-actions'
import styled from '@emotion/styled/macro'
import { css, jsx } from '@emotion/core'

import Typography from '@material-ui/core/Typography'

import { ViewContainer, EditNameDialog } from 'components'
import { shipmentsSelectors } from 'features/shipments'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'

const Shipment = styled(Typography)``

const ShipmentId = styled.span`
  color: #3f51b5;
`

interface RouteParams {
  id: string
}

export const ShipmentDetailView: React.FC<RouteChildrenProps<RouteParams>> = ({
  match,
}) => {
  const shipment = useSelector((state: RootState) => {
    return shipmentsSelectors.getShipmentByID(
      state,
      (match && match.params.id) || ''
    )
  })

  const [open, setOpen] = React.useState(false)

  if (!shipment) return null

  return (
    <ViewContainer title={'Shipment Details'}>
      <Shipment component="h2" variant="h4">
        Shipment <ShipmentId>{shipment.id}</ShipmentId>
      </Shipment>
      <Link to={'/'}>
        <Typography variant="caption">&#60; Back to list</Typography>
      </Link>
      <Card>
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
          <Typography variant="body2" color="textSecondary" component="p">
            test
          </Typography>
          <p>id: {shipment.id}</p>
          <p>name: {shipment.name}</p>
        </CardContent>
      </Card>
      <EditNameDialog
        open={open}
        onClose={() => setOpen(false)}
        shipmentName={shipment.name}
        onNameEdit={console.log}
      />
    </ViewContainer>
  )
}
