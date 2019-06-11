type Mode = 'sea' | 'air'
type Type = 'FCL' | 'LCL'
type Status = 'ACTIVE' | 'COMPLETED'
interface Cargo {
  type: string
  description: string
  volume: number
}
interface Service {
  type: string
  value?: number
}

export interface Shipment {
  id: string
  name: string
  cargo: Cargo[]
  mode: Mode
  type: Type
  destination: string
  origin: string
  services: Service[]
  total: number
  status: Status
  userId: string
}

export type Shipments = Shipment[]
