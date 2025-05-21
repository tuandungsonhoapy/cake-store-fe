import httpRepoInstance, { customHttpInstance } from '@/core/http/http'
import { useMutation } from '@tanstack/react-query'
import { IProduct } from '.'

export const useDeleteProduct = () => {
  return useMutation({
    mutationFn: (id: string) => deleteProductAPI(id)
  })
}

export const deleteProductAPI = async (id: string): Promise<IProduct> => {
  const response = await customHttpInstance('http://54.95.185.0:8082/api/v2').delete(`/products/delete/${id}`)

  return response.data
}
