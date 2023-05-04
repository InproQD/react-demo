import { request } from '@/utils/request'

const BASE_URL = '/gateway/servicebus-fssapi/fssapi/infrastructure'

export const CustomerInfrastructureApi = {
  async getAvailableDate(success: any, failure: any) {
    return await request.get(`${BASE_URL}/available-date`, {}, success, failure)
  },
  async getPortfolioPrograms(success: any, failure: any) {
    return await request.get(`${BASE_URL}/get-portfolio-program`, {}, success, failure)
  },
  async getPortfolioParameters(portfolioId: any, success?: any, failure?: any) {
    return await request.get(`${BASE_URL}/get-portfolio-parameters`, { portfolioId }, success, failure)
  }
}
