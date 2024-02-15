import { APIResponse } from '@/interfaces/APIResponse';
import { api } from '../api';
import { Search } from './../../interfaces/SearchParams';


export const brand = {
    async getAll<T>({ query, orderBy = "name desc" }: Search = {}) {
      const { data } = await api.get<APIResponse<T>>("/brands", {
        params: {
          query,
          orderBy: orderBy,
          limit: 100 
        }
      })
      return data
    },
}