import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { EditNameDialog, Props } from './EditNameDialog'

describe('EditNameDialog', () => {
  const props: Props = {
    open: false,
    onClose: () => {},
    shipmentName: 'shipment name',
    onNameEdit: (name: string) => {},
  }

  test('snapshot', () => {
    // Arrange
    const { container } = render(<EditNameDialog {...props} />)
    // Assert
    expect(container).toMatchSnapshot()
  })

  it('opens a modal dialog when the `open` prop changes', () => {
    // Arrange
    const { rerender, queryByText } = render(
      <EditNameDialog {...props} open={false} />
    )

    expect(queryByText('Edit name')).toBeNull()

    // Act
    rerender(<EditNameDialog {...props} open={true} />)

    // Assert
    expect(queryByText('Edit name')).not.toBeNull()
  })

  it('calls the `onClose` when clicked on `Cancel` button', () => {
    // Arrange
    const handleClose = jest.fn()
    const { getByText } = render(
      <EditNameDialog {...props} open={true} onClose={handleClose} />
    )
    const cancelButtonNode = getByText('Cancel')

    // Act
    fireEvent.click(cancelButtonNode)

    // Assert
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('calls the `onNameEdit` when clicked on `Edit` button', () => {
    // Arrange
    const handleOnNameEdit = jest.fn()
    const newShipmentName = 'T-shirts from Shanghai to Hamburg'
    const { getByText, getByLabelText } = render(
      <EditNameDialog
        {...props}
        open={true}
        shipmentName={''}
        onNameEdit={handleOnNameEdit}
      />
    )
    const inputElement = getByLabelText('Name')
    const editButtonNode = getByText('Edit')

    // Act
    fireEvent.change(inputElement, { target: { value: newShipmentName } })
    fireEvent.click(editButtonNode)

    // Assert
    expect(handleOnNameEdit).toHaveBeenCalledTimes(1)
    expect(handleOnNameEdit).toHaveBeenCalledWith(newShipmentName)
  })
})
