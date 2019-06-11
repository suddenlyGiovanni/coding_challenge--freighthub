import * as React from 'react'
import styled from '@emotion/styled/macro'
import debounce from 'lodash.debounce'

import { SearchField, ShipmentMode, StatusField } from 'components'

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding: 10px 0;
  margin-bottom: 20px;
`
interface Props {
  onSearchChange: (value: string) => void
  onStatusChange: (value: any) => void
  onModeChange: (value: any) => void
}

export const SearchBar: React.FC<Props> = ({
  onSearchChange,
  onStatusChange,
  onModeChange,
}) => {
  return (
    <SearchBarContainer>
      <SearchField
        onSearchChange={debounce((value: string) => onSearchChange(value), 500)}
      />
      <ShipmentMode onChange={onModeChange} />
      <StatusField onChange={onStatusChange} />
    </SearchBarContainer>
  )
}
