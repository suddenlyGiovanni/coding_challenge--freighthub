import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { SearchField, Props } from './SearchField'

describe('SearchField', () => {
  const props: Props = {
    onSearchChange: value => {},
    initialValue: '',
  }

  test('snapshot', () => {
    // Arrange
    const { container } = render(<SearchField {...props} />)
    // Assert
    expect(container).toMatchSnapshot()
  })

  it('calls the `onSearchChange` when the user types', () => {
    // Arrange
    const search1 = 'U1000'
    const search2 = 'U1001'
    const handleOnSearchChange = jest.fn()
    const { getByLabelText } = render(
      <SearchField {...props} onSearchChange={handleOnSearchChange} />
    )
    const inputElement = getByLabelText('Search')

    // Act
    fireEvent.change(inputElement, { target: { value: search1 } })
    fireEvent.change(inputElement, { target: { value: search2 } })

    // Assert
    expect(handleOnSearchChange).toHaveBeenCalledTimes(2)
    expect(handleOnSearchChange).toHaveBeenCalledWith(search1)
    expect(handleOnSearchChange).toHaveBeenCalledWith(search2)
  })
})
