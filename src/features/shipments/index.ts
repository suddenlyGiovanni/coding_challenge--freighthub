/**
 * @description Index
 * This file, from a module perspective, behaves as the duck file from the original proposal.
 *  * It exports, as default, the reducer function of the duck.
 *  * It exports, as named export, the selectors and the operations.
 *  * Optionally, it exports the types if they are needed in other ducks.
 */

import * as shipmentsActions from './actions'
import { shipmentsReducer } from './reducer'
import * as shipmentsSelectors from './selectors'
import shipmentsTypes from './types'
import { shipmentsMiddleware } from './middleware'

export {
  shipmentsTypes,
  shipmentsActions,
  shipmentsSelectors,
  shipmentsReducer,
  shipmentsMiddleware,
}
