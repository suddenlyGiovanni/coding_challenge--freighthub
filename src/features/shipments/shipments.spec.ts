import {
  shipmentsActions as actions,
  shipmentsTypes as types,
  shipmentsReducer as reducer,
  shipmentsSelectors as selectors,
} from './index'

import { shipments, shipment } from 'test/mockDb'
import { ShipmentsState } from './reducer'
import { RootState } from 'typesafe-actions'

import { initialState as initialStateFilter } from 'features/filter/reducer'

/**
 * FIXTURES
 */
function getInitialState(initial?: ShipmentsState) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return reducer(initial, {} as any)
}

function getRootState(initial?: ShipmentsState) {
  return { shipments: getInitialState(initial) }
}

describe('feature: `shipments`', () => {
  // ACTIONS CREATOR
  describe('actions', () => {
    // FETCH_SHIPMENTS
    it('`fetchShipments` should create an action with the correct signature', () => {
      expect(actions.fetchShipments()).toMatchObject({
        type: types.FETCH_SHIPMENTS,
      })
    })

    // SET_SHIPMENTS
    it('`setShipments` should create an action with the correct signature', () => {
      expect(actions.setShipments({ data: shipments })).toMatchObject({
        type: types.SET_SHIPMENTS,
        payload: { shipments },
      })
    })

    // EDIT_NAME
    it('`editShipmentName` should create an action with the correct signature', () => {
      const name = 'T-shirts from Shanghai to Hamburg'
      const id = 'U1002'
      expect(actions.editShipmentName({ name, id })).toMatchObject({
        type: types.EDIT_NAME,
        payload: { name, id },
      })
    })

    // SET_SHIPMENT
    it('`setShipment` should create an action with the correct signature', () => {
      expect(actions.setShipment({ data: shipment })).toMatchObject({
        type: types.SET_SHIPMENT,
        payload: { shipment },
      })
    })
  })

  // REDUCER
  describe('reducer', () => {
    it('initial state should match a snapshot', () => {
      const initialState = getInitialState()
      expect(initialState).toMatchSnapshot()
    })

    it('save to the store the list of all the shipments', () => {
      // Arrange
      const initialState = getInitialState()
      const newShipments = [...shipments, shipment]
      // Act
      const stateSnapshot1 = reducer(
        initialState,
        actions.setShipments({ data: shipments })
      )

      const stateSnapshot2 = reducer(
        initialState,
        actions.setShipments({ data: newShipments })
      )

      // Assert
      expect(stateSnapshot1).toHaveLength(shipments.length)
      expect(stateSnapshot1).toEqual(shipments)
      expect(stateSnapshot2).toEqual(newShipments)
    })

    it('updates the name field of a specific shipment', () => {
      // Arrange
      const initialState = getInitialState(shipments)
      const shipmentId = shipments[0].id
      const shipmentNewName = 'Really old spring collection'

      // Act
      const stateSnapshot1 = reducer(
        initialState,
        actions.editShipmentName({
          id: shipmentId,
          name: shipmentNewName,
        })
      )
      const editedEntry = stateSnapshot1.find(s => s.id === shipmentId)

      // Assert
      expect(stateSnapshot1).not.toEqual(initialState)
      expect((editedEntry && editedEntry.name) || '').toBe(shipmentNewName)
    })

    it('update a single shipment', () => {
      // Arrange
      const initialState = getInitialState(shipments)
      const newShipmentData = { ...initialState[0] }
      const shipmentNewName = 'Really old spring collection'
      newShipmentData.name = shipmentNewName

      // Act
      const stateSnapshot = reducer(
        initialState,
        actions.setShipment({ data: newShipmentData })
      )
      const editedEntry = stateSnapshot.find(s => s.id === newShipmentData.id)

      // Assert
      expect(stateSnapshot).not.toEqual(initialState)
      expect((editedEntry && editedEntry.name) || '').toBe(shipmentNewName)
    })

    // SELECTORS
    describe('selectors', () => {
      const initialRootState = getRootState(shipments)

      it('getShipments', () => {
        expect(selectors.getShipments(initialRootState as RootState)).toEqual(
          shipments
        )
      })

      it('getShipmentByID', () => {
        expect(
          selectors.getShipmentByID(
            initialRootState as RootState,
            shipments[0].id
          )
        ).toEqual(shipments[0])
      })

      it('getFilteredShipments', () => {
        const rootState = {
          ...initialRootState,
          filter: { ...initialStateFilter, status: 'COMPLETED' },
        }

        expect(
          selectors.getFilteredShipments(rootState as RootState)[0][0]
        ).toEqual(shipments[1])
      })
    })
  })
})
