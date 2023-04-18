import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

const JotaiDemo = lazy(() => import('@/pages/State/JotaiDemo'))
const ReactQueryDemo = lazy(() => import('@/pages/State/ReactQueryDemo'))

export const dashboardRouters: RouteObject[] = [
  {
    path: 'jotai',
    element: <JotaiDemo />,
  },
  {
    path: 'react-query',
    element: <ReactQueryDemo />,
  },
]
