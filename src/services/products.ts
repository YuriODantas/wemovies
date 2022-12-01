import { AxiosResponse } from 'axios'
import { api } from './api'

export interface Products {
  id: number
  title: string
  price: number
  image: string
}

export const getProducts = (): Promise<AxiosResponse<Products[]>> => {
  return api.get('/products')
}