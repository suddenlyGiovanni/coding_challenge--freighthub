import React from 'react'
import { render } from '@testing-library/react'

import { StatusField } from './StatusField'

describe('StatusField', () => {
  it.todo('calls `onChange` with the new status when selection is changed')
  // it is really complicate to simulate a change on the material ui select element.

  test('snapshot', () => {
    const { container } = render(<StatusField onChange={() => {}} />)
    expect(container).toMatchSnapshot()
  })
})
