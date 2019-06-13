import { createAction } from 'typesafe-actions'

import shipmentsTypes from './types'
import * as ShipmentsTypes from './typings'

/*
 * ### Actions
 * It's important to be consistent when defining actions, so let's always export functions from
 * this file, we don't care if the action needs any input from the outside to build the payload
 * or not.
 * NOTE: Trying to impose a bit of structure to the actions object, the`type/payload` approach is
 * pretty popular.
 */

export const fetchShipments = createAction(shipmentsTypes.FETCH_SHIPMENTS)

export const setShipments = createAction(
  shipmentsTypes.SET_SHIPMENTS,
  action => {
    return ({ data }: { data: ShipmentsTypes.Shipments }) => {
      return action({ shipments: data })
    }
  }
)

export const editShipmentName = createAction(
  shipmentsTypes.EDIT_NAME,
  action => {
    return ({ name, id }: { name: string; id: string }) => action({ name, id })
  }
)

export const setShipment = createAction(shipmentsTypes.SET_SHIPMENT, action => {
  return ({ data }: { data: ShipmentsTypes.Shipment }) =>
    action({ shipment: data })
})
