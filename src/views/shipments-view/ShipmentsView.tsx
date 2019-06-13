import * as React from 'react'
import { RouteChildrenProps } from 'react-router'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import styled from '@emotion/styled/macro'

import Typography from '@material-ui/core/Typography'

import Container from '@material-ui/core/Container'

import { SearchBar, ShipmentsListContainer } from 'components'
import { shipmentsSelectors, shipmentsActions } from 'features/shipments'

const ViewContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  padding-top: 30px;

  text-align: center;
`

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
    <ViewContainer>
      <Typography variant="h4" component="h2">
        Shipments
      </Typography>
      <Container maxWidth={'md'}>
        <SearchBar />
        <ShipmentsListContainer
          shipments={shipments}
          onSelectedShipment={shipmentId =>
            history.push(`/shipment/${shipmentId}`)
          }
        />
      </Container>
    </ViewContainer>
  )
}
