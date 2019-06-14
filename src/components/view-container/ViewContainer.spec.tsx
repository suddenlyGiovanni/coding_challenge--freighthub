import React from 'react'
import { render } from '@testing-library/react'

import { ViewContainer } from './ViewContainer'

describe('ViewContainer', () => {
  test('snapshot', () => {
    // Arrange
    const ChildrenNode = () => <div />
    const title = 'title'
    const { container } = render(
      <ViewContainer title={title}>
        <ChildrenNode />
      </ViewContainer>
    )

    // Assert
    expect(container).toMatchSnapshot()
  })
})
