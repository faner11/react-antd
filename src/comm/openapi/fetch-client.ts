import { flow } from 'es-toolkit'
import createFetchClient from 'openapi-fetch'

import type { paths } from './schema'

interface PayError {
  statusCode: number
  error: string
  message: string
}

export class ResponseError extends Error {
  override name = 'ResponseError'
  override cause?: PayError
  httpStatus: number
  constructor(
    message: string,
    options: {
      cause?: PayError
      httpStatus: number
    },
  ) {
    super(message)
    this.cause = options.cause
    this.httpStatus = options.httpStatus
  }
}

export const fetchClientRwa = createFetchClient<paths>({
  baseUrl: 'https://jsonplaceholder.typicode.com',
})

export const fetchClient = flow(fetchClientRwa.request, async (res) => {
  const awaitRes = await res
  const { data, error, response } = awaitRes
  if (error != undefined) {
    throw new ResponseError(`Request failed with status ${String(response.status)}`, {
      cause: error as unknown as PayError,
      httpStatus: response.status,
    })
  }
  if (data == undefined) {
    throw new Error('Request failed with data is empty')
  }
  return data
})
