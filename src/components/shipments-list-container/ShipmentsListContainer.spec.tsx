import React from 'react'
import { render } from '@testing-library/react'

import { ShipmentsListContainer, Props } from './ShipmentsListContainer'
import { shipments } from 'test/mockDb'

describe('ShipmentsListContainer', () => {
  const props: Props = {
    shipments: [shipments],
    onSelectedShipment: shipmentId => {},
  }

  test('snapshot', () => {
    // Arrange
    const { container } = render(<ShipmentsListContainer {...props} />)
    // Assert
    expect(container).toMatchSnapshot()
  })

  test('renders no items when the shipment list is empty', () => {
    const { queryByTestId } = render(
      <ShipmentsListContainer {...props} shipments={[]} />
    )
    expect(queryByTestId('page-container')).toBeNull()
  })
})
