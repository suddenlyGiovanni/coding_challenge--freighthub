import * as React from 'react'
import { RouteChildrenProps } from 'react-router'
import { connect } from 'react-redux'
import { RootState } from 'typesafe-actions'
import MaterialTable from 'material-table'

import { shipmentsSelectors, shipmentsActions } from 'features/shipments'
import { Shipment } from 'features/shipments/typings'

function identity<A>(a: A): A {
  return a
}

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public handleView = (event: any, rowData: Shipment): void => {
    const shipmentId = rowData.id
    this.props.history.push(`/shipment/${shipmentId}`)
  }

  public render() {
    const { shipments } = this.props
    return (
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          title="Shipments List"
          columns={[
            { title: 'Name', field: 'name' },
            { title: 'Origin', field: 'origin', searchable: false },
            { title: 'Destination', field: 'destination', searchable: false },
            {
              title: 'Mode',
              field: 'mode',
              lookup: { sea: 'Sea', air: 'Air' },
              searchable: false,
            },
            {
              title: 'Type',
              field: 'type',
              lookup: { FCL: 'FCL', LCL: 'LCL' },
              searchable: false,
            },
            {
              title: 'Status',
              field: 'status',
              lookup: { ACTIVE: 'Active', COMPLETED: 'Completed' },
              searchable: false,
            },
            {
              title: 'Total',
              field: 'total',
              searchable: false,
              type: 'numeric',
            },
          ]}
          data={shipments.map(identity)}
          isLoading={!shipments}
          actions={[
            {
              icon: 'visibility',
              tooltip: 'View Details',
              onClick: this.handleView,
            },
          ]}
          options={{
            debounceInterval: 300,
            paging: true,
            pageSize: 20,
            rowStyle: { backgroundColor: '#EEE' },
          }}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShipmentListView)
