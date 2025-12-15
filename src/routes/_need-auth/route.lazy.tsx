import type { MenuDataItem } from '@ant-design/pro-components'
import type { ReactNode } from 'react'

import { asideMenuConfig } from '#comm'
import { ErrorComponent } from '#components'
import { ProLayout } from '@ant-design/pro-components'
import { CatchBoundary, createLazyFileRoute, Link, Outlet, useLocation } from '@tanstack/react-router'
import { Spin } from 'antd'
import { isNil } from 'es-toolkit'
import { Suspense } from 'react'

export const Route = createLazyFileRoute('/_need-auth')({
  component: LayoutComponent,
})

const menuItemRender = (item: MenuDataItem, defaultDom: ReactNode) => {
  if (isNil(item.path) || item.path === '') {
    return defaultDom
  }
  return <Link to={item.path}>{defaultDom}</Link>
}
const loopMenuItem = (menus: MenuDataItem[]): MenuDataItem[] => {
  return menus.map((item) => {
    return {
      ...item,
      children: item.children && loopMenuItem(item.children),
    }
  })
}
function LayoutComponent() {
  const location = useLocation()
  return (
    <ProLayout
      ErrorBoundary={false}
      fixedHeader
      fixSiderbar
      layout="mix"
      location={{
        pathname: location.pathname,
      }}
      logo="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      menuDataRender={() => loopMenuItem(asideMenuConfig)}
      menuItemRender={menuItemRender}
      navTheme="light"
      theme="light"
      title="React—Antd"
    >
      <div style={{ minHeight: 'calc(100vh - 56px)' }}>
        <Suspense
          fallback={
            <div className="pt-11 text-center">
              <Spin />
            </div>
          }
        >
          <CatchBoundary
            errorComponent={ErrorComponent}
            getResetKey={() => {
              return location.pathname
            }}
          >
            <Outlet />
          </CatchBoundary>
        </Suspense>
      </div>
    </ProLayout>
  )
}
