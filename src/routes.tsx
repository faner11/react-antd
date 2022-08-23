import BasicLayout from '@/layouts/BasicLayout'
import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const Dashboard = lazy(() => import('@/pages/Dashboard'))
const DashboardPage1 = lazy(() => import('@/pages/Dashboard/Page1'))

const Home = lazy(() => import('@/pages/Home'))
const NotFound = lazy(() => import('@/components/NotFound'))

const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/dashboard',
        children: [{
          index: true,
          element: <Dashboard />
        }, {
          path: 'page1',
          element: <DashboardPage1 />
        }]
      }, {
        path: '*',
        element: <NotFound />
      }]
  }
]

export default routerConfig
