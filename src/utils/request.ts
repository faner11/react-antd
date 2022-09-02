import { message } from 'antd'
import type { Options } from 'ky'
import ky from 'ky'
/**
 * 基础api，带公共参数
 */
export const api = ky.extend({
  headers: {
    Authorization: 'xxx'
  },
  hooks: {
    beforeError: [
      (error) => {
        message.error(error.message)
        return error
      }
    ]
  }
})
interface ResBody<T> {
  code: string
  data: T
  msg: string
}
/**
 * 业务请求返回体封装，仅返回data字段值,如需特殊请求，请使用api方法
 * @param url
 * @param options
 */
export async function jsonPost<T>(url: string, options?: Options) {
  const res = await api.post(url, options).json<ResBody<T>>()
  if (res.code !== '000000') {
    message.error(res.msg || '请求错误')
    throw new Error('请求错误')
  }
  return res.data
}
