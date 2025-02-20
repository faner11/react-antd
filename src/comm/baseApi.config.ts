import { Configuration } from '@/api'

export const BaseApiConfig = new Configuration({
  basePath: 'https://jsonplaceholder.typicode.com',
  headers: {
    myheader: '123456',
  },
})
