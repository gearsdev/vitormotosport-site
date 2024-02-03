import { Brand } from "./Brand"

export interface Model {
  id: string
  name: string
  brandId: string
  createdAt: string
  brand: Brand
}