import { request } from '@/utils/request'

const BASE_URL = '/gateway/servicebus-fssapi/fssapi/auth'

const CustomerAuthApi = {
  async signIn(input: unknown, success: object, failure?: object) {
    return await request.post(`${BASE_URL}/sign-in`, input, success, failure)
  }
}

export { CustomerAuthApi }
