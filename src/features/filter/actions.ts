import { createAction } from 'typesafe-actions'

import filterTypes from './types'

export const setFilter = createAction(
  filterTypes.SET_FILTER_SHIPMENTS,
  action => {
    return (filter: {
      id?: string
      mode?: {
        sea?: boolean
        air?: boolean
        rail?: boolean
      }
      status?: 'ACTIVE' | 'COMPLETED' | 'ALL'
    }) => action(filter)
  }
)
