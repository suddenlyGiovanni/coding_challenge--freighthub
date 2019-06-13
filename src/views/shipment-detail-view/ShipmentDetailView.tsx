import * as React from 'react'
import { RouteChildrenProps } from 'react-router'
import { useSelector } from 'react-redux'

import { RootState } from 'typesafe-actions'

import { shipmentsSelectors } from 'features/shipments'

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
