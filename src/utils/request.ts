import axios from 'axios'
import type { AxiosInstance } from 'axios'

const initAxios: AxiosInstance = axios.create({
  timeout: 1000 * 150
})

interface Data<T> {
  code: number
  message: string
  data: T
}

const request = {
  async get<T>(url: string, input?: unknown, success?: object, failure?: object) {
    return await initAxios.get<T, Data<T>>(url, { params: input }).then(async (result) => {
      return await resultHandler(result, Promise.resolve, Promise.reject, success, failure)
    })
  },
  async post<T>(url: string, input?: unknown, success?: object, failure?: object) {
    return await initAxios.post<T, Data<T>>(url, input).then(async (result) => {
      return await resultHandler(result, Promise.resolve, Promise.reject, success, failure)
    })
  },
  async put<T>(url: string, input: any, success?: object, failure?: object) {
    return await initAxios.put<T, Data<T>>(url, input).then(async (result) => {
      return await resultHandler(result, Promise.resolve, Promise.reject, success, failure)
    })
  },
  async delete<T>(url: string, input: any, success?: object, failure?: object) {
    return await initAxios.delete<T, Data<T>>(url, { params: input }).then(async (result) => {
      return await resultHandler(result, Promise.resolve, Promise.reject, success, failure)
    })
  }
}

async function resultHandler(result: any, resolve: any, reject: any, success: any, failure: any): Promise<any> {
  const resultData = result.data
  if (result.status === 200) {
    if (resultData.code !== 1) {
      failure(resultData)
      await Promise.reject(result.data).catch()
    } else {
      success(resultData.data)
      return await Promise.resolve(resultData.data)
    }
  } else {
    failure(resultData)
    return await Promise.reject(result.statusText)
  }
}

export { request }
