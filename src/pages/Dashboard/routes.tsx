import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

const Dashboard = lazy(() => import('@/pages/Dashboard'))
const DashboardPage1 = lazy(() => import('@/pages/Dashboard/Page1'))

export const dashboardRouters: RouteObject[] = [
  {
    path: 'page',
    element: <Dashboard />,
  },
  {
    path: 'page1',
    element: <DashboardPage1 />,
  },
]
