import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { TransportMode, Props } from './TransportMode'

const dataTestid = {
  air: 'plane-icon',
  sea: 'ship-icon',
  rail: 'train-icon',
}

describe('TransportMode', () => {
  const props: Props = {
    mode: 'air',
    onClick: () => {},
    checked: false,
  }

  test('snapshot', () => {
    const { container } = render(<TransportMode {...props} />)
    expect(container).toMatchSnapshot()
  })

  it('renders a `Plane icon` when mode = `air`', () => {
    // Arrange
    const _props: Props = { ...props, mode: 'air' }
    const { container, getByTestId } = render(<TransportMode {..._props} />)

    // Assert
    expect(container.children.length).toBe(1) //?
    expect(getByTestId(dataTestid.air)).toBeDefined()
  })

  it('renders a `Ship icon` when mode = `sea`', () => {
    // Arrange
    const _props: Props = { ...props, mode: 'sea' }
    const { container, getByTestId } = render(<TransportMode {..._props} />)

    // Assert
    expect(container.children.length).toBe(1)
    expect(getByTestId(dataTestid.sea)).toBeDefined()
  })

  it('renders a `Train icon` when mode = `rail`', () => {
    // Arrange
    const _props: Props = { ...props, mode: 'rail' }
    const { container, getByTestId } = render(<TransportMode {..._props} />)

    // Assert
    expect(container.children.length).toBe(1) //?
    expect(getByTestId(dataTestid.rail)).toBeDefined()
  })

  it('calls `onClick` when clicked', () => {
    // Arrange
    const handleClick = jest.fn()
    const _props: Props = { ...props, onClick: handleClick }

    const { getByTestId } = render(<TransportMode {..._props} />)
    const IconNode = getByTestId(dataTestid.air)

    // Act
    fireEvent.click(IconNode)

    // Assert
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
