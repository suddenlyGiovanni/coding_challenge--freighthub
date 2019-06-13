import * as React from 'react'
import { RouteChildrenProps } from 'react-router'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { SearchBar, ShipmentsListContainer, ViewContainer } from 'components'
import { shipmentsSelectors, shipmentsActions } from 'features/shipments'

export const ShipmentsView: React.FC<RouteChildrenProps> = ({ history }) => {
  const dispatch = useDispatch()

  const fetchShipments = React.useCallback(
    () => dispatch(shipmentsActions.fetchShipments()),
    [dispatch]
  )

  const shipments = useSelector(
    shipmentsSelectors.getFilteredShipments,
    shallowEqual
  )

  React.useEffect(() => {
    fetchShipments()
  }, [fetchShipments])

  return (
    <ViewContainer title={'Shipments'}>
      <SearchBar />
      <ShipmentsListContainer
        shipments={shipments}
        onSelectedShipment={shipmentId =>
          history.push(`/shipment/${shipmentId}`)
        }
      />
    </ViewContainer>
  )
}
