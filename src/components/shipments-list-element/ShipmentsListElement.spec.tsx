import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { ShipmentsListElement, Props } from './ShipmentsListElement'

describe('ShipmentsListElement', () => {
  const props: Props = {
    shipment: {
      id: 'S1000',
      name: 'T-shirts from Shanghai to Hamburg',
      cargo: [
        {
          type: 'Fabric',
          description: '1000 Blue T-shirts',
          volume: 2,
        },
        {
          type: 'Fabric',
          description: '2000 Green T-shirts',
          volume: 3,
        },
      ],
      mode: 'sea',
      type: 'FCL',
      destination: 'Saarbrücker Str. 38, 10405 Berlin',
      origin: 'Shanghai Port',
      services: [
        {
          type: 'customs',
        },
      ],
      total: 1000,
      status: 'ACTIVE',
      userId: 'U1000',
    },
    onClick: shipmentId => {},
  }

  test('snapshot', () => {
    // Arrange
    const { container } = render(<ShipmentsListElement {...props} />)
    // Assert
    expect(container).toMatchSnapshot()
  })

  it('calls `onClick` callback when the user clicks on element', () => {
    // Arrange
    const handleOnClick = jest.fn()
    const { getByTestId } = render(
      <ShipmentsListElement {...props} onClick={handleOnClick} />
    )
    const cardActionAreaNode = getByTestId('shipment-list-item')

    // // Act
    fireEvent.click(cardActionAreaNode)

    // // Assert
    expect(handleOnClick).toHaveBeenCalledTimes(1)
    expect(handleOnClick).toHaveBeenCalledWith(props.shipment.id)
  })
})
