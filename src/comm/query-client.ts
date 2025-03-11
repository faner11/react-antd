import { QueryClient } from '@tanstack/react-query'
import { message } from 'antd'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: (err) => {
        void message.error(err.message)
      },
    },
  },
})
