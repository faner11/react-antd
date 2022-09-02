import 'moment/locale/zh-cn'
import './index.css'
import 'antd/dist/antd.variable.min.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import moment from 'moment'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import AntdGlobalCssFix from './components/AntdGlobalCssFix'
import { jsonPost } from './utils'
moment.locale('zh-cn')

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      onError: (err) => {
        console.log(err)
      },
      queryFn: ({ queryKey }) => {
        return jsonPost(queryKey[0] as string, {
          json: queryKey[1]
        })
      }
    },
    mutations: {
      onError: (err) => {
        console.log(err)
      }
    }
  }
})
const root = ReactDOM.createRoot(document.getElementById('root')!)
/**
 * // TODO 暂时关闭 StrictMode 严格模式，等社区有简单的解决方案再开启
 * @url https://github.com/reactwg/react-18/discussions/19
 */
root.render(
  <QueryClientProvider client={queryClient}>
    <ConfigProvider locale={zhCN}>
      <Router>
        <App />
      </Router>
      <AntdGlobalCssFix />
    </ConfigProvider>
  </QueryClientProvider>
)
