import { APIResponse } from "../../interfaces/APIResponse"
import { Vehicle } from "../../interfaces/Vehicle"
import { api } from "../api"

interface GetAllVehicleParams {
  query?: string
  status?: string
}

export const vehicle = {
  async getAll<T>({ query, status }: GetAllVehicleParams = {}) {
    const { data } = await api.get<APIResponse<T>>("/vehicles", {
      params: {
        query,
        orderBy: "createdAt desc",
        status: status || "",
        limit: 3
      }
    })
    return data
  },
  async getById<T>(id: string) {
    const { data } = await api.get<APIResponse<T>>(`/vehicles/${id}`)
    return data
  },
}
