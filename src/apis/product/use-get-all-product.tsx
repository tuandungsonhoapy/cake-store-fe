import httpRepoInstance, { customHttpInstance } from '@/core/http/http'
import { useQuery } from '@tanstack/react-query'
import { IProduct } from '.'

const productKeys = {
  product: ['products']
}

interface GetAllProductsResponse {
  data: IProduct[]
  total: number
}

export const useGetAllProducts = () => {
  const query = useQuery({
    queryKey: productKeys.product,
    queryFn: () => getAllProductsAPI(),
    refetchOnMount: true
  })

  return query
}

export const getAllProductsAPI = async (): Promise<GetAllProductsResponse> => {
  const response = await customHttpInstance('http://54.95.185.0:8082/api/v2').get('/products')
  return response.data
}
