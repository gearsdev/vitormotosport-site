import { APIResponse } from '@/interfaces/APIResponse';
import { api } from '../api';
import { Search } from './../../interfaces/SearchParams';


export const model = {
    async getAllByBrand<T>( brandId: string, { query, orderBy = "name desc" }: Search = {}) {
      const { data } = await api.get<APIResponse<T>>(`/models/brand/${brandId}`, {
        params: {
          query,
          orderBy: orderBy,
          limit: 100 
        }
      })
      return data
    },
}