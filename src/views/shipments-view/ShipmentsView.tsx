import * as React from 'react'
import { RouteChildrenProps } from 'react-router'
import { connect } from 'react-redux'
import { RootState } from 'typesafe-actions'
import styled from '@emotion/styled/macro'

import Typography from '@material-ui/core/Typography'

import Container from '@material-ui/core/Container'

import { SearchBar, ShipmentsListContainer } from 'components'
import { shipmentsSelectors, shipmentsActions } from 'features/shipments'

const ViewContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  padding-top: 30px;

  text-align: center;
`

function mapStateToProps(state: RootState) {
  return { shipments: shipmentsSelectors.getShipments(state) }
}

const mapDispatchToProps = {
  fetchShipments: shipmentsActions.fetchShipments,
}

type ReduxProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

type Props = RouteChildrenProps & ReduxProps

interface State {
  value: string
  status: string
  mode: any
}

export class ShipmentsView extends React.Component<Props, State> {
  public state: State = {
    value: '',
    status: 'ALL',
    mode: {},
  }

  public componentDidMount() {
    this.props.fetchShipments()
  }

  public handleSearchChange = (value: string): void => {
    this.setState({ value }, () => console.log(this.state))
  }
  public handleStatusChange = (status: any): void => {
    this.setState({ status }, () => console.log(this.state))
  }
  public handleModeChange = (mode: any): void => {
    this.setState({ mode }, () => console.log(this.state))
  }

  public routeToDetails = (shipmentId: string): void => {
    this.props.history.push(`/shipment/${shipmentId}`)
  }

  public render() {
    return (
      <ViewContainer>
        <Typography variant="h4" component="h2">
          Shipments
        </Typography>
        <Container maxWidth={'md'}>
          <SearchBar
            onSearchChange={this.handleSearchChange}
            onStatusChange={this.handleStatusChange}
            onModeChange={this.handleModeChange}
          />
          <ShipmentsListContainer
            shipments={this.props.shipments}
            onSelectedShipment={this.routeToDetails}
          />
        </Container>
      </ViewContainer>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShipmentsView)
