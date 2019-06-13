export interface Filter {
  id: string
  mode: {
    sea: boolean
    air: boolean
    rail: boolean
  }
  status: 'ACTIVE' | 'COMPLETED' | 'ALL'
}
