import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { message } from 'antd'
import { useEffect } from 'react'

import { queryClient } from '@/comm/query-client'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const [messageApi, contextHolder] = message.useMessage()
  useEffect(() => {
    queryClient.setDefaultOptions({
      queries: {
        refetchOnWindowFocus: false,
      },
      mutations: {
        onError: (err) => {
          void messageApi.error(err.message)
        },
      },
    })
  }, [messageApi])
  return (
    <>
      <Outlet />
      {contextHolder}
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
