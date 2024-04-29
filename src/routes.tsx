import RequireAuth from '@auth-kit/react-router/RequireAuth'
import { Spin } from 'antd'
import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { formRouters } from './pages/Form/routes'
import { dashboardRouters } from './pages/State/routes'

// eslint-disable-next-line react-refresh/only-export-components
const BasicLayout = lazy(async () =>
  import('@/layouts/BasicLayout').then((module) => ({ default: module.BasicLayout })),
)

/**
 * 路由配置,多个路由配置可以合并为一个数组
 */
export const routerConfig = createBrowserRouter([
  {
    path: '/login',
    lazy: () => import('@/pages/Login'),
  },
  {
    path: '/',
    element: (
      <RequireAuth fallbackPath="/login">
        <Suspense
          fallback={
            <div className="text-center pt-11">
              <Spin />
            </div>
          }
        >
          <BasicLayout />
        </Suspense>
      </RequireAuth>
    ),
    children: [
      {
        index: true,
        lazy: () => import('@/pages/Table'),
      },
      {
        path: 'state',
        children: dashboardRouters,
      },
      {
        path: 'form',
        children: formRouters,
      },
      {
        path: 'echarts',
        lazy: () => import('@/pages/Echarts'),
      },
      {
        path: '*',
        lazy: () => import('@/components/NotFound'),
      },
    ],
  },
])
