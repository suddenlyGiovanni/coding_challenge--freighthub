import { Reducer } from 'redux'
import { getType, ActionType } from 'typesafe-actions'

import * as shipmentsActions from './actions'
import * as ShipmentsTypes from './typings'

export type ShipmentsAction = ActionType<typeof shipmentsActions>

export type ShipmentsState = Readonly<ShipmentsTypes.Shipments>

const initialState: ShipmentsState = []

export const shipmentsReducer: Reducer<ShipmentsState, ShipmentsAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case getType(shipmentsActions.setShipments): {
      return [...action.payload.shipments]
    }

    case getType(shipmentsActions.editShipmentName): {
      const { id, name } = action.payload
      return state.map(storeShipment => {
        return storeShipment.id === id
          ? { ...storeShipment, name } //
          : storeShipment //
      })
    }

    case getType(shipmentsActions.setShipment): {
      const { shipment } = action.payload
      return state.map(storeShipment => {
        return storeShipment.id === shipment.id
          ? shipment //
          : storeShipment //
      })
    }

    default:
      return state
  }
}
