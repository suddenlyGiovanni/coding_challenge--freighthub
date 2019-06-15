import { RootState } from 'typesafe-actions'
import {
  filterActions as actions,
  filterTypes as types,
  filterReducer as reducer,
  filterSelectors as selectors,
} from './index'

import { FilterState } from './reducer'

/**
 * FIXTURES
 */
function getInitialState(initial?: FilterState) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return reducer(initial, {} as any)
}

function getRootState(initial?: FilterState) {
  return { filter: getInitialState(initial) }
}

const filter = {
  id: 'U1000',
  mode: { air: false },
  status: 'ACTIVE' as const,
}

describe('feature: `filter`', () => {
  // ACTIONS CREATOR
  describe('actions', () => {
    it('setFilter should create an action with the correct signature', () => {
      const expectedActionShape = {
        type: types.SET_FILTER_SHIPMENTS,
        payload: {
          id: 'U1000',
          mode: { air: false },
          status: 'ACTIVE',
        },
      }
      expect(actions.setFilter(filter)).toMatchObject(expectedActionShape)
    })
  })

  // REDUCER
  describe('reducer', () => {
    it('initial state should match a snapshot', () => {
      const initialState = getInitialState()
      expect(initialState).toMatchSnapshot()
    })

    it('set the filter state to the store', () => {
      // Arrange
      const initialState = getInitialState()
      // Act
      const stateSnapshot1 = reducer(initialState, actions.setFilter(filter))
      const stateSnapshot2 = reducer(
        stateSnapshot1,
        actions.setFilter({ mode: { sea: false } })
      )

      const stateSnapshot3 = reducer(
        stateSnapshot2,
        actions.setFilter({ status: 'COMPLETED' })
      )
      // Assert
      expect(stateSnapshot1).toMatchObject<FilterState>({
        id: 'U1000',
        mode: {
          air: false,
          sea: true,
          rail: true,
        },
        status: 'ACTIVE',
      })

      expect(stateSnapshot2).toMatchObject<FilterState>({
        id: 'U1000',
        mode: {
          air: false,
          sea: false,
          rail: true,
        },
        status: 'ACTIVE',
      })

      expect(stateSnapshot3).toMatchObject<FilterState>({
        id: 'U1000',
        mode: {
          air: false,
          sea: false,
          rail: true,
        },
        status: 'COMPLETED',
      })
    })
  })

  // SELECTORS
  describe('selectors', () => {
    it('retrieves the filter branch form the store', () => {
      const rootState = getRootState()
      expect(selectors.getFilter(rootState as RootState)).toMatchObject({
        id: '',
        mode: {
          air: true,
          sea: true,
          rail: true,
        },
        status: 'ALL',
      })
    })
  })
})
