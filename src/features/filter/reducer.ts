import { Reducer } from 'redux'
import { getType, ActionType } from 'typesafe-actions'

import * as filterActions from './actions'
import * as FilterTypes from './typings'

export type FilterAction = ActionType<typeof filterActions>

export type FilterState = Readonly<FilterTypes.Filter>

const initialState: FilterState = {
  id: '',
  mode: {
    air: true,
    sea: true,
    rail: true,
  },
  status: 'ALL',
}

export const filterReducer: Reducer<FilterState, FilterAction> = (
  state = initialState,
  action
) => {
  if (action.type === getType(filterActions.setFilter)) {
    const { id, mode, status } = action.payload
    return {
      ...state,
      id: id === undefined ? state.id : id,
      status: status || state.status,
      mode: mode
        ? {
            ...state.mode,
            ...mode,
          }
        : state.mode,
    }
  }
  return state
}
