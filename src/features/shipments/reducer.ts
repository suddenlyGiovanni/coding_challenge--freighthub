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
  if (action.type === getType(shipmentsActions.setShipments)) {
    return [...action.payload.shipments]
  }

  return state
}
