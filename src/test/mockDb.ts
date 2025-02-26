import { Shipment, Shipments, Cargo } from 'features/shipments/typings'

export const cargos: Cargo[] = [
  {
    type: 'Fabric',
    description: '1000 Blue T-shirts',
    volume: 2,
  },
  {
    type: 'Fabric',
    description: '2000 Green T-shirts',
    volume: 3,
  },
]

export const shipment: Shipment = {
  id: 'S1000',
  name: 'T-shirts from Shanghai to Hamburg',
  cargo: cargos,
  mode: 'sea',
  type: 'FCL',
  destination: 'Saarbrücker Str. 38, 10405 Berlin',
  origin: 'Shanghai Port',
  services: [
    {
      type: 'customs',
    },
  ],
  total: 1000,
  status: 'ACTIVE',
  userId: 'U1000',
}

export const shipments: Shipments = [
  {
    id: 'S1001',
    name: 'New spring collection',
    cargo: [
      {
        type: 'Furniture',
        description: '300 Tables',
        volume: 20,
      },
      {
        type: 'Furniture',
        description: '1500 Chairs',
        volume: 15,
      },
    ],
    mode: 'sea',
    type: 'FCL',
    destination: 'Saarbrücker Str. 38, 10405 Berlin',
    origin: 'Ningbo port',
    services: [
      {
        type: 'customs',
      },
      {
        type: 'insurance',
        value: 100,
      },
    ],
    total: 3000,
    status: 'ACTIVE',
    userId: 'U1002',
  },
  {
    id: 'S1002',
    name: 'PO89634, PO27X',
    cargo: [
      {
        type: 'Bikes model 27X',
        description: '100 Bikes model 27X',
        volume: 100,
      },
    ],
    mode: 'air',
    type: 'LCL',
    destination: 'Saarbrücker Str. 38, 10405 Berlin',
    origin: 'Shanghai Port',
    services: [
      {
        type: 'customs',
      },
    ],
    total: 10000,
    status: 'COMPLETED',
    userId: 'U1001',
  },
]
