import { Middleware, Dispatch } from 'redux'
import { RootState, RootAction, getType } from 'typesafe-actions'

import * as shipmentsActions from './actions'
import { apiActions } from 'features/api'

const BASE_URL = {
  mockServer: 'http://localhost:3004',
}

export const shipmentsMiddleware: Middleware<
  {},
  RootState,
  Dispatch<RootAction>
> = () => next => action => {
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
}
