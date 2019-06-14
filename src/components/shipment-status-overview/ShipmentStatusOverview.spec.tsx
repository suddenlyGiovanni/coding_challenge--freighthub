import * as React from 'react'
import { render } from '@testing-library/react'

import { ShipmentStatusOverview, Props } from './ShipmentStatusOverview'

describe('ShipmentStatusOverview', () => {
  test('snapshot', () => {
    // Arrange
    const props: Props = {
      status: 'ACTIVE',
      destination: 'Saarbrücker Str. 38, 10405 Berlin',
      origin: 'Shanghai Port',
    }
    const { container } = render(<ShipmentStatusOverview {...props} />)

    // Assert
    expect(container).toMatchSnapshot()
  })
})
