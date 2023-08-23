import { Spin } from 'antd';
import { lazy, Suspense } from 'react';
import { RequireAuth } from 'react-auth-kit';
import { createBrowserRouter } from 'react-router-dom';

import { formRouters } from './pages/Form/routes';
import { dashboardRouters } from './pages/State/routes';

const BasicLayout = lazy(async () => import('@/layouts/BasicLayout'));
const Login = lazy(async () => import('@/pages/Login'));
const TablePage = lazy(async () => import('@/pages/Table'));
const EchartsPage = lazy(async () => import('@/pages/Echarts'));

const NotFound = lazy(async () => import('@/components/NotFound'));
/**
 * 路由配置,多个路由配置可以合并为一个数组
 */
const routerConfig = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: (
      <RequireAuth loginPath="/login">
        <Suspense
          fallback={(
            <div className="text-center pt-11">
              <Spin />
            </div>
          )}
        >
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
        path: 'echarts',
        element: <EchartsPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default routerConfig;
