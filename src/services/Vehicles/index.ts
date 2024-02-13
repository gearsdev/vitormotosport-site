import { Search } from './../../interfaces/SearchParams';
import { APIResponse } from "../../interfaces/APIResponse"
import { api } from "../api"

export const vehicle = {
  async getAll<T>({ query, status }: Search = {}) {
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
