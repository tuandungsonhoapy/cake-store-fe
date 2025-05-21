import httpRepoInstance, { customHttpInstance } from '@/core/http/http'
import { useMutation } from '@tanstack/react-query'
import { IProduct } from '.'

export const useAddProduct = () => {
  return useMutation({
    mutationFn: (body: FormData) => createProductAPI(body)
  })
}

export const createProductAPI = async (body: FormData): Promise<IProduct> => {
  const response = await customHttpInstance('http://54.95.185.0:8082/api/v2').post('/products', body, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return response.data
}
