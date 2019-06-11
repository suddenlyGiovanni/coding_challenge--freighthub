import * as React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'styles/index.css'

import { store } from 'store'
import ShipmentsListView from 'views/shipments-list-view/ShipmentsListView'
import ShipmentDetailView from 'views/shipment-detail-view/ShipmentDetailView'

import * as serviceWorker from './serviceWorker'

const rootElement = document.getElementById('root')

const Root: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ShipmentsListView} />
        <Route path="/shipment/:id" component={ShipmentDetailView} />
        <Route component={ShipmentsListView} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<Root />, rootElement)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
