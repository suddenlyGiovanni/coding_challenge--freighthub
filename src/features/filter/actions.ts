import { createAction } from 'typesafe-actions'

import filterTypes from './types'
import { Filter } from './typings'

export const setFilter = createAction(
  filterTypes.SET_FILTER_SHIPMENTS,
  action => {
    return (filter: Partial<Filter>) => action(filter)
  }
)
