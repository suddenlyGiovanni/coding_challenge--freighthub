import { Middleware, Dispatch } from 'redux'
import { RootState, RootAction, getType } from 'typesafe-actions'

import * as shipmentsActions from './actions'
import { getShipmentByID } from './selectors'
import { apiActions } from 'features/api'

const BASE_URL = {
  mockServer: 'http://localhost:3004',
}

export const shipmentsMiddleware: Middleware<
  {},
  RootState,
  Dispatch<RootAction>
> = ({ getState }) => next => action => {
  next(action)

  // FETCH_SHIPMENTS:
  if (action.type === getType(shipmentsActions.fetchShipments)) {
    // listen for the fetch shipment action
    // dispatch a api fetch request with the correct data
    next(
      apiActions.apiRequest({
        feature: getType(shipmentsActions.fetchShipments),
        method: 'GET',
        baseURL: BASE_URL.mockServer,
        url: '/shipments',
      })
    )
  }

  if (
    action.meta &&
    action.meta.feature === getType(shipmentsActions.fetchShipments)
  ) {
    // listen for the api actions [API_START, API_SUCCESS, API_END, API_ERROR, ACCESS_DENIED]
    if (action.type === getType(apiActions.apiSuccess)) {
      // in case of success...
      next(shipmentsActions.setShipments(action.payload))
    }
  }

  // PUSH THE EDITED SHIPMENT TO THE BACKEND.

  if (action.type === getType(shipmentsActions.editShipmentName)) {
    const { id, name } = action.payload
    const shipment = getShipmentByID(getState(), id)
    next(
      apiActions.apiRequest({
        feature: getType(shipmentsActions.editShipmentName),
        method: 'PUT',
        baseURL: BASE_URL.mockServer,
        url: `/shipments/${id}`,
        data: { ...shipment, name },
      })
    )
  }

  // SET THE EDITED SHIPMENT ENTRY THE STORE

  if (
    action.meta &&
    action.meta.feature === getType(shipmentsActions.editShipmentName)
  ) {
    if (action.type === getType(apiActions.apiSuccess)) {
      // in case of success...
      next(shipmentsActions.setShipment(action.payload))
    }
  }
}
