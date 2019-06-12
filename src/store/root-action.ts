import { duckActions } from 'features/duck'
import { apiActions } from 'features/api'
import { shipmentsActions } from 'features/shipments'
import { filterActions } from 'features/filter'

export const rootAction = {
  duck: duckActions,
  api: apiActions,
  shipments: shipmentsActions,
  filter: filterActions,
}
