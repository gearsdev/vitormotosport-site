export interface APIResponse<T> {
  succes: boolean,
  statusCode: number,
  message: string,
  totalRegisters?: number,
  data: T
}
