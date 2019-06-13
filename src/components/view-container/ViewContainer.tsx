import * as React from 'react'
import styled from '@emotion/styled/macro'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  padding-top: 30px;
`

export const ViewContainer: React.FC<{ title: string }> = ({
  children,
  title,
}) => {
  return (
    <Main>
      <Typography variant="h4" component="h2">
        {title}
      </Typography>
      <Container maxWidth={'md'}>{children}</Container>
    </Main>
  )
}
