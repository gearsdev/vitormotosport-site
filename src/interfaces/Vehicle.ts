import { Brand } from "./Brand"
import { Model } from "./Model"

export interface Vehicle {
  id: string
  description: string
  isFavorite: boolean
  wasSold: boolean
  soldAt?: boolean
  salePrice?: number
  isArchived: boolean
  archivedAt: string | null
  price: number
  kilometers: number
  year: number
  createdAt: string
  brandId: string
  modelId: string
  brand?: Brand
  model?: Model
  vehicleImage?: {
    id: string
    key: string
    createdAt: string
    vehicleId: string
    url_image: string
  }[],
}
