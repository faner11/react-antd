import './index.css'

import NiceModal from '@ebay/nice-modal-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import dayjs from 'dayjs'
import dayjsLocal from 'dayjs/locale/zh-cn'
import { StrictMode } from 'react'
import { AuthProvider } from 'react-auth-kit'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import { jsonPost } from './utils'

dayjs.locale(dayjsLocal)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      onError: (err) => {
        console.log(err)
      },
      queryFn: ({ queryKey }) => {
        return jsonPost(queryKey[0] as string, {
          json: queryKey[1],
        })
      },
    },
    mutations: {
      onError: (err) => {
        console.log(err)
      },
    },
  },
})
const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <AuthProvider authName='_auth' authType='localstorage'>
      <QueryClientProvider client={queryClient}>
        <NiceModal.Provider>
          <ConfigProvider locale={zhCN}>
            <Router>
              <App />
            </Router>
          </ConfigProvider>
        </NiceModal.Provider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
