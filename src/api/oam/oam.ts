import { request } from '@/utils/request'

const BASE_URL = '/gateway/servicebus-oamapi/oamapi'

export const OamApi = {
  async getPortfolioByCondition(data: any, success: any, failure?: any) {
    return await request.get(`${BASE_URL}/portfolio-parameter/get-by-value`, data, success, failure)
  }
}
