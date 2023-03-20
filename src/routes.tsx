import { lazy } from 'react'
import { RequireAuth } from 'react-auth-kit'
import type { RouteObject } from 'react-router-dom'

import BasicLayout from '@/layouts/BasicLayout'

import { dashboardRouters } from './pages/Dashboard/routes'
import Login from './pages/Login'

const Home = lazy(() => import('@/pages/Home'))
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
        <BasicLayout />
      </RequireAuth>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'dashboard',
        children: dashboardRouters,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]

export default routerConfig
