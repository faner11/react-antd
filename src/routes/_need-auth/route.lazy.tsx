import type { MenuDataItem } from '@ant-design/pro-components'
import { ProLayout } from '@ant-design/pro-components'
import { createLazyFileRoute, Link, Outlet, useLocation } from '@tanstack/react-router'
import { Spin } from 'antd'
import type { ReactNode } from 'react'
import { createElement, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { asideMenuConfig, icons } from '@/comm/menu-config'
import { ErrorComponent } from '@/components/error-component'
import { isNil } from 'es-toolkit'

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
    const icon = icons[item.icon as string]
    return {
      ...item,
      icon: icon && (createElement(icon) as ReactNode),
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
      fixSiderbar={true}
      fixedHeader={true}
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
          <ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorComponent}>
            <Outlet />
          </ErrorBoundary>
        </Suspense>
      </div>
    </ProLayout>
  )
}
