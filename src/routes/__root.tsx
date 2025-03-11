import '../index.css'

import NiceModal from '@ebay/nice-modal-react'
import { QueryClientProvider } from '@tanstack/react-query'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { App, ConfigProvider } from 'antd'
import zhCn from 'antd/es/locale/zh_CN'
import dayjs from 'dayjs'
import dayjsLocal from 'dayjs/locale/zh-cn'

import { queryClient } from '@/comm/query-client'
dayjs.locale(dayjsLocal)

export const Route = createRootRoute({
  component: () => (
    <>
      <QueryClientProvider client={queryClient}>
        <NiceModal.Provider>
          <ConfigProvider locale={zhCn} theme={{ cssVar: true, hashed: false }}>
            <App>
              <Outlet />
            </App>
          </ConfigProvider>
        </NiceModal.Provider>
      </QueryClientProvider>
      <TanStackRouterDevtools />
    </>
  ),
})
