import { VehicleSearch } from './../../interfaces/SearchParams';
import { APIResponse } from "../../interfaces/APIResponse"
import { api } from "../api"

export const vehicle = {
  async getAll<T>({ query, status, brandId, modelId }: VehicleSearch = {}) {
    const { data } = await api.get<APIResponse<T>>("/vehicles", {
      params: {
        query,
        orderBy: "createdAt desc",
        status: status || "",
        limit: 15,
        brandId,
        modelId
      }
    })
    return data
  },

  async getAllByBrand<T>(brandId: string, { query, status }: VehicleSearch = {}) {
    const { data } = await api.get<APIResponse<T>>(`/vehicles/brands/${brandId}`, {
      params: {
        query,
        orderBy: "createdAt desc",
        status: status || "",
        limit: 15
      }
    })
    return data
  },

  async getAllByModel<T>(modelId: string, { query, status }: VehicleSearch = {}) {
    const { data } = await api.get<APIResponse<T>>(`/vehicles/models/${modelId}`, {
      params: {
        query,
        orderBy: "createdAt desc",
        status: status || "",
        limit: 15
      }
    })
    return data
  },

  async getById<T>(id: string) {
    const { data } = await api.get<APIResponse<T>>(`/vehicles/${id}`)
    return data
  },
}
