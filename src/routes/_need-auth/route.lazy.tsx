import type { MenuDataItem } from '@ant-design/pro-components'
import { ProLayout } from '@ant-design/pro-components'
import { CatchBoundary, createLazyFileRoute, Link, Outlet, useLocation } from '@tanstack/react-router'
import { Spin } from 'antd'
import { isNil } from 'es-toolkit'
import type { ReactNode } from 'react'
import { Suspense } from 'react'

import { asideMenuConfig } from '@/comm/menu-config'
import { ErrorComponent } from '@/components/error-component'

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
      logo="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      title="React—Antd"
      location={{
        pathname: location.pathname,
      }}
      layout="mix"
      navTheme="light"
      theme="light"
      menuDataRender={() => loopMenuItem(asideMenuConfig)}
      menuItemRender={menuItemRender}
      fixSiderbar
      fixedHeader
      ErrorBoundary={false}
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
            getResetKey={() => {
              return location.pathname
            }}
            errorComponent={ErrorComponent}
          >
            <Outlet />
          </CatchBoundary>
        </Suspense>
      </div>
    </ProLayout>
  )
}
