import _ from 'lodash'
import { RootState } from 'typesafe-actions'

import { Shipment, Shipments } from './typings'
import { filterSelectors } from 'features/filter'

export const getShipments = (state: RootState): Shipments =>
  state.shipments || []

export const getShipmentByID = (
  state: RootState,
  shipmentId: string
): Shipment | null => {
  const desiredShipment = state.shipments.find(
    shipment => shipment.id === shipmentId
  )
  return !desiredShipment ? null : desiredShipment
}

export const getFilteredShipments = (state: RootState) => {
  const shipments = getShipments(state)
  const { id, mode, status } = filterSelectors.getFilter(state)

  const modes = Object.entries(mode).reduce<string[]>(
    (acc, [key, val]) => (val ? [...acc, key] : acc),
    []
  )

  const filteredShipments = shipments.filter(shipment => {
    const checkId = (): boolean => {
      if (id === '') return true
      return shipment.id.toLocaleLowerCase().includes(id.toLocaleLowerCase())
    }

    const checkStatus = (): boolean => {
      if (status === 'ALL') return true
      return shipment.status === status
    }

    const checkMode = (): boolean => {
      return modes.includes(shipment.mode)
    }

    return checkId() && checkStatus() && checkMode()
  })

  // group by 20 el.

  return _.chunk(filteredShipments, 20)
}
