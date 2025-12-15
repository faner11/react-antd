import { queryClient } from '#comm'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { message } from 'antd'
import { useEffect } from 'react'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const [messageApi, contextHolder] = message.useMessage()
  useEffect(() => {
    queryClient.setDefaultOptions({
      mutations: {
        onError: (err) => {
          void messageApi.error(err.message)
        },
      },
      queries: {
        refetchOnWindowFocus: false,
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
