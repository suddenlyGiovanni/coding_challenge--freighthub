import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { ShipmentMode, Props } from './ShipmentMode'

describe('ShipmentMode', () => {
  const props: Props = {
    initialValues: {
      sea: true,
      air: true,
      rail: true,
    },
    onChange: values => {},
  }

  test('snapshot', () => {
    // Arrange
    const { container } = render(<ShipmentMode {...props} />)
    // Assert
    expect(container).toMatchSnapshot()
  })

  it('calls `onChange` callback when the user clicks on the icons', () => {
    // Arrange
    const handleOnChange = jest.fn()
    const { getByLabelText } = render(
      <ShipmentMode {...props} onChange={handleOnChange} />
    )
    const seaCheckboxElement = getByLabelText('Sea')
    const railCheckboxElement = getByLabelText('Rail')
    const airCheckboxElement = getByLabelText('Air')

    // // Act
    fireEvent.click(seaCheckboxElement)
    fireEvent.click(railCheckboxElement)
    fireEvent.click(airCheckboxElement)

    // // Assert
    expect(handleOnChange).toHaveBeenCalledTimes(3)
    expect(handleOnChange).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({ sea: false })
    )
    expect(handleOnChange).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({ rail: false })
    )
    expect(handleOnChange).toHaveBeenNthCalledWith(
      3,
      expect.objectContaining({ air: false })
    )
  })
})
