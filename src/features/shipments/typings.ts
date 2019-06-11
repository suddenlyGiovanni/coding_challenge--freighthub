export type Mode = 'sea' | 'air' | 'rail'
export type Type = 'FCL' | 'LCL'
export type Status = 'ACTIVE' | 'COMPLETED'
export interface Cargo {
  type: string
  description: string
  volume: number
}
export interface Service {
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

export type Shipments = readonly Shipment[]
