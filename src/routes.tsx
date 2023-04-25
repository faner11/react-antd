import { Spin } from 'antd'
import { lazy, Suspense } from 'react'
import { RequireAuth } from 'react-auth-kit'
import type { RouteObject } from 'react-router-dom'

// import BasicLayout from '@/layouts/BasicLayout'
import { formRouters } from './pages/Form/routes'
import { dashboardRouters } from './pages/State/routes'

const BasicLayout = lazy(() => import('@/layouts/BasicLayout'))
const Login = lazy(() => import('@/pages/Login'))
const TablePage = lazy(() => import('@/pages/Table'))
const NotFound = lazy(() => import('@/components/NotFound'))
/**
 * 路由配置,多个路由配置可以合并为一个数组
 */
const routerConfig: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: (
      <RequireAuth loginPath='/login'>
        <Suspense
          fallback={
            <div className='text-center pt-11'>
              <Spin />
            </div>
          }>
          <BasicLayout />
        </Suspense>
      </RequireAuth>
    ),
    children: [
      {
        index: true,
        element: <TablePage />,
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
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]

export default routerConfig
