import { combineReducers } from 'redux-starter-kit'

import { duckReducer } from 'features/duck'
import { apiReducer } from 'features/api'
import { shipmentsReducer } from 'features/shipments'

export const rootReducer = combineReducers({
  duck: duckReducer,
  api: apiReducer,
  shipments: shipmentsReducer,
  // ...
})
