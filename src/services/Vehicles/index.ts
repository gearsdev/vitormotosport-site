import { VehicleSearch } from './../../interfaces/SearchParams';
import { APIResponse } from "../../interfaces/APIResponse"
import { api } from "../api"

export const vehicle = {
  async getAll<T>({ query, status = "", brandId, modelId, limit = 12, page = 1 }: VehicleSearch = {}) {
    const { data } = await api.get<APIResponse<T>>("/vehicles", {
      params: {
        query,
        orderBy: "createdAt desc",
        limit,
        page,
        status,
        brandId,
        modelId
      }
    })
    return data
  },

  async getAllByBrand<T>(brandId: string, { query, status = "", limit = 12, page = 1 }: VehicleSearch = {}) {
    const { data } = await api.get<APIResponse<T>>(`/vehicles/brands/${brandId}`, {
      params: {
        query,
        orderBy: "createdAt desc",
        status,
        limit
      }
    })
    return data
  },

  async getAllByModel<T>(modelId: string, { query, status = "", limit = 12, page = 1 }: VehicleSearch = {}) {
    const { data } = await api.get<APIResponse<T>>(`/vehicles/models/${modelId}`, {
      params: {
        query,
        orderBy: "createdAt desc",
        status,
        limit,
        page
      }
    })
    return data
  },

  async getById<T>(id: string) {
    const { data } = await api.get<APIResponse<T>>(`/vehicles/${id}`)
    return data
  },
}
