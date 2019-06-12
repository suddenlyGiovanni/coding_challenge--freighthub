export interface Filter {
  name: string
  mode: {
    sea: boolean
    air: boolean
    rail: boolean
  }
  status: 'ACTIVE' | 'COMPLETED' | 'ALL'
}
