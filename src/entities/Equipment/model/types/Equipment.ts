export interface Equipment {
  id: number
  name: string
  stockNumber: string
  status: 'use' | 'discarded'
  room: string
  specifications: string
}
