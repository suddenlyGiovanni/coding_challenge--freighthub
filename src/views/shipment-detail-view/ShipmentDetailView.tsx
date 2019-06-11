import * as React from 'react'
import { RouteChildrenProps } from 'react-router'

import { connect } from 'react-redux'
import { RootState } from 'typesafe-actions'

import { shipmentsSelectors } from 'features/shipments'

interface RouteParams {
  id: string
}

type RouterProps = RouteChildrenProps<RouteParams>

function mapStateToProps(state: RootState, ownProps: RouterProps) {
  const shipmentId =
    (ownProps && ownProps.match && ownProps.match.params.id) || ''
  return {
    shipment: shipmentsSelectors.getShipmentByID(state, shipmentId),
  }
}

type ReduxProps = ReturnType<typeof mapStateToProps>

type Props = RouterProps & ReduxProps
export const ShipmentDetailView: React.FC<Props> = ({ match, shipment }) => {
  console.log('ShipmentDetailView - shipment: ', shipment)
  return (
    <div>
      <h1> ShipmentDetailView</h1>
      <div>
        {shipment && (
          <>
            <p>id: {shipment.id}</p>
            <p>name: {shipment.name}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default connect(
  mapStateToProps,
  null
)(ShipmentDetailView)
