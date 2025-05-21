import httpRepoInstance, { customHttpInstance } from '@/core/http/http'

export const getCategoriesAPI = async (searchPath: string) => {
  const response = await customHttpInstance('http://54.95.185.0:8082/api/v2').get(`/categories${searchPath}`)

  return response.data
}

export const getCategoriesAllAPI = async () => {
  const response = await customHttpInstance('http://54.95.185.0:8082/api/v2').get(`categories/getAll`)
  return response.data
}
