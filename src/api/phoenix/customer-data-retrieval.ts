import { request } from '@/utils/request'

const BASE_URL = '/gateway/servicebus-fssapi/fssapi/data-retrieval'

export const CustomerDataRetrievalApi = {
  async getCustomerIdentityData(success: any, failure: any) {
    return await request.get(`${BASE_URL}/get-identity`, {}, success, failure)
  },
  async getCustomerEmployment(success: any, failure: any) {
    return await request.get(`${BASE_URL}/get-employment`, {}, success, failure)
  },
  async getCustomerPayroll(success: any, failure: any) {
    return await request.get(`${BASE_URL}/get-payroll`, {}, success, failure)
  },
  async listCustomerContact(success: any, failure: any) {
    return await request.get(`${BASE_URL}/list-contact`, {}, success, failure)
  },
  async getBankAccount(success: any, failure: any) {
    return await request.get(`${BASE_URL}/get-bank-account`, {}, success, failure)
  },
  async listBankAccount(success: any, failure: any) {
    return await request.get(`${BASE_URL}/list-bank-account`, {}, success, failure)
  },
  async listBankStatement(success: any, failure: any) {
    return await request.get(`${BASE_URL}/list-bank-statement`, {}, success, failure)
  },
  async getCustomerAccount(input: any, success: any, failure?: any) {
    return await request.get(`${BASE_URL}/get-customer-account`, input, success, failure)
  },
  async getAccountCredit(success: any, failure: any) {
    return await request.get(`${BASE_URL}/get-account-credit`, {}, success, failure)
  }
}
