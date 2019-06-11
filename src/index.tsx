import * as React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StylesProvider } from '@material-ui/styles'

import 'styles/index.css'
import * as serviceWorker from './serviceWorker'

import { store } from 'store'
import { ShipmentDetailView, ShipmentsView } from 'views'

const rootElement = document.getElementById('root')

const Root: React.FC = () => (
  <Provider store={store}>
    <StylesProvider injectFirst>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ShipmentsView} />
          <Route path="/shipment/:id" component={ShipmentDetailView} />
          <Route component={ShipmentsView} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  </Provider>
)

ReactDOM.render(<Root />, rootElement)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
