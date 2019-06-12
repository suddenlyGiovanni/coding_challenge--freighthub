import * as React from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import styled from '@emotion/styled/macro'
import _ from 'lodash'

import { SearchField, ShipmentMode, StatusField } from 'components'
import { filterActions, filterSelectors } from 'features/filter'

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
  const dataFilter = useSelector(filterSelectors.getFilter, shallowEqual)
  const dispatch = useDispatch()

  return (
    <SearchBarContainer>
      <SearchField
        initialValue={dataFilter.name}
        onSearchChange={_.debounce(
          (name: string) => dispatch(filterActions.setFilter({ name })),
          500
        )}
      />
      <ShipmentMode
        onChange={mode => dispatch(filterActions.setFilter({ mode }))}
        initialValues={dataFilter.mode}
      />
      <StatusField
        onChange={status => dispatch(filterActions.setFilter({ status }))}
        initialValue={dataFilter.status}
      />
    </SearchBarContainer>
  )
}
