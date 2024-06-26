import './index.css'

import NiceModal from '@ebay/nice-modal-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { App as AntdApp, ConfigProvider, message } from 'antd'
import zhCn from 'antd/es/locale/zh_CN'
import dayjs from 'dayjs'
import dayjsLocal from 'dayjs/locale/zh-cn'
import { StrictMode } from 'react'
import AuthProvider from 'react-auth-kit'
import createStore from 'react-auth-kit/createStore'
import reactDom from 'react-dom/client'

import { App } from './App'

dayjs.locale(dayjsLocal)

const queryClient = new QueryClient({
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
const store = createStore({
  authType: 'localstorage',
  authName: '_auth',
})
const root = reactDom.createRoot(document.getElementById('root') as HTMLDivElement)

root.render(
  <StrictMode>
    <AuthProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <NiceModal.Provider>
          <ConfigProvider locale={zhCn} theme={{ cssVar: true, hashed: false }}>
            <AntdApp>
              <App />
            </AntdApp>
          </ConfigProvider>
        </NiceModal.Provider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
