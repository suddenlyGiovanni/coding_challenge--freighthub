import * as React from 'react'
import { useDispatch } from 'react-redux'
import styled from '@emotion/styled/macro'
import debounce from 'lodash.debounce'

import { SearchField, ShipmentMode, StatusField } from 'components'
import { filterActions } from 'features/filter'

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding: 10px 0;
  margin-bottom: 20px;
`

export const SearchBar: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <SearchBarContainer>
      <SearchField
        initialValue={''}
        onSearchChange={debounce(
          (name: string) => dispatch(filterActions.setFilter({ name })),
          500
        )}
      />
      <ShipmentMode
        onChange={mode => dispatch(filterActions.setFilter({ mode }))}
        initialValues={{
          sea: true,
          air: true,
          rail: true,
        }}
      />
      <StatusField
        onChange={status => dispatch(filterActions.setFilter({ status }))}
        initialValue={'ALL'}
      />
    </SearchBarContainer>
  )
}
