import * as React from 'react'
import { render } from '@testing-library/react'

import { Location, Props } from './Location'

describe('Location', () => {
  test('snapshot', () => {
    // Arrange
    const props: Props = {
      name: 'name',
      active: true,
      alignment: 'left',
    }
    const { container } = render(<Location {...props} />)

    // Assert
    expect(container).toMatchSnapshot()
  })
})
