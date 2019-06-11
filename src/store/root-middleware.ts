import { getDefaultMiddleware } from 'redux-starter-kit'

import { actionSplitter } from './action-splitter-middleware'
import { apiMiddleware } from 'features/api'
import { duckMiddleware } from 'features/duck'
import { shipmentsMiddleware } from 'features/shipments'

const rootMiddleware = [
  ...getDefaultMiddleware(),
  actionSplitter,
  duckMiddleware,
  shipmentsMiddleware,
  apiMiddleware,
]

if (process.env.NODE_ENV === 'development') {
  rootMiddleware.push(require('redux-logger').default)
}

export default rootMiddleware
