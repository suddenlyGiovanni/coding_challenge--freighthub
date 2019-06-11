import { RootState } from 'typesafe-actions'
import { Shipment, Shipments } from './typings'

export const getShipments = (state: RootState): Shipments => state.shipments

export const getShipmentByID = (
  state: RootState,
  shipmentId: string
): Shipment | null => {
  const desiredShipment = state.shipments.find(
    shipment => shipment.id === shipmentId
  )
  return !desiredShipment ? null : desiredShipment
}
