import httpRepoInstance, { customHttpInstance } from '@/core/http/http'

export const addCartApi = async (data: {
  productId: string
  quantity: number
  size: string
  title: string
  price: number
  thumbnail: string
}) => {
  const response = await customHttpInstance('http://54.95.185.0:8082/api/v2').post('/cart/add-to-cart', data)

  return response
}
export const updateCartApi = async (data: { productId: string; size: string; quantity: string }) => {
  const response = await customHttpInstance('http://54.95.185.0:8082/api/v2').put('/cart/edit-cart', data)
  console.log('API response:', response.data)
  return response.data
}
export const deleteCartItemApi = async (productId: string, size: string) => {
  const response = await customHttpInstance('http://54.95.185.0:8082/api/v2').delete(`/cart/delete-cart`, {
    data: { productId, size }
  })
  return response
}
