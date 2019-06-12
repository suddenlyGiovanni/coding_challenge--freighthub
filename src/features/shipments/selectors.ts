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
  const { name, mode, status } = filterSelectors.getFilter(state)

  const modes = Object.entries(mode).reduce<string[]>(
    (acc, [key, val]) => (val ? [...acc, key] : acc),
    []
  )
  return shipments.filter(shipment => {
    const checkName = (): boolean => {
      if (name === '') return true
      return shipment.name
        .toLocaleLowerCase()
        .includes(name.toLocaleLowerCase())
    }

    const checkStatus = (): boolean => {
      if (status === 'ALL') return true
      return shipment.status === status
    }

    const checkMode = (): boolean => {
      return modes.includes(shipment.mode)
    }

    return checkName() && checkStatus() && checkMode()
  })
}
