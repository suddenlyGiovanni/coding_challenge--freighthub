import * as React from 'react'
import { RouteChildrenProps } from 'react-router'
import { connect } from 'react-redux'
import { RootState } from 'typesafe-actions'

import { shipmentsSelectors, shipmentsActions } from 'features/shipments'

function mapStateToProps(state: RootState) {
  return { shipments: shipmentsSelectors.getShipments(state) }
}

const mapDispatchToProps = {
  fetchShipments: shipmentsActions.fetchShipments,
}

type ReduxProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

type Props = RouteChildrenProps & ReduxProps

export class ShipmentListView extends React.Component<Props> {
  public componentDidMount() {
    this.props.fetchShipments()
  }
  public render() {
    const { shipments, history } = this.props
    return (
      <div>
        <h1>ShipmentListView</h1>
        <ul>
          {shipments &&
            shipments.map(shipment => {
              return (
                <li
                  key={shipment.id}
                  onClick={() => history.push(`/shipment/${shipment.id}`)}
                >
                  <p>name: {shipment.name}</p>
                  <p>mode: {shipment.mode}</p>
                  <p>status: {shipment.status}</p>
                </li>
              )
            })}
        </ul>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShipmentListView)
