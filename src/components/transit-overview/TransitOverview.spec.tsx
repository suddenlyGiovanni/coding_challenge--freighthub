import React from 'react'
import { render } from '@testing-library/react'

import { TransitOverview, Props } from './TransitOverview'

describe('TransportMode', () => {
  const props: Props = {
    origin: 'Shanghai Port',
    destination: 'Saarbrücker Str. 38, 10405 Berlin',
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
  }

  test('snapshot', () => {
    const { container } = render(<TransitOverview {...props} />)
    expect(container).toMatchSnapshot()
  })
})
