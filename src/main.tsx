import '@ant-design/v5-patch-for-react-19'
import './index.css'

import NiceModal from '@ebay/nice-modal-react'
import { QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { App, ConfigProvider } from 'antd'
import zhCn from 'antd/es/locale/zh_CN'
import dayjs from 'dayjs'
import dayjsLocal from 'dayjs/locale/zh-cn'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { queryClient } from './comm/query-client'
// Import the generated route tree
import { routeTree } from './routeTree.gen'

dayjs.locale(dayjsLocal)
// Create a new router instance
const router = createRouter({
  routeTree,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.querySelector('#root')
if (!rootElement) {
  throw new Error('Root element not found')
}
const root = ReactDOM.createRoot(rootElement)
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={zhCn} theme={{ cssVar: true, hashed: false }}>
        <App>
          <NiceModal.Provider>
            <RouterProvider router={router} />
          </NiceModal.Provider>
        </App>
      </ConfigProvider>
    </QueryClientProvider>
  </StrictMode>,
)
