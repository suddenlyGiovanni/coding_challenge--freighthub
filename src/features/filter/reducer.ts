import { Reducer } from 'redux'
import { getType, ActionType } from 'typesafe-actions'

import * as filterActions from './actions'
import * as FilterTypes from './typings'

export type FilterAction = ActionType<typeof filterActions>

export type FilterState = Readonly<FilterTypes.Filter>

const initialState: FilterState = {
  name: '',
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
    return { ...state, ...action.payload }
  }
  return state
}
