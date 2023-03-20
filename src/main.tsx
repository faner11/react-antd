import './index.css'

import NiceModal from '@ebay/nice-modal-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import dayjs from 'dayjs'
import dayjsLocal from 'dayjs/locale/zh-cn'
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
/**
 * // TODO 暂时关闭 StrictMode 严格模式，等社区有简单的解决方案再开启
 * @url https://github.com/reactwg/react-18/discussions/19
 */
root.render(
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
  </AuthProvider>,
)
