import type { MenuDataItem } from '@ant-design/pro-components'
import { ProLayout } from '@ant-design/pro-components'
import { FormDialog, FormDrawer } from '@formily/antd-v5'
import { Spin } from 'antd'
import type { FC, ReactNode } from 'react'
import { createElement, Suspense } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import { asideMenuConfig, icons } from './menuConfig'

const menuItemRender = (item: MenuDataItem, defaultDom: ReactNode) => {
  if (item.path == null || item.path === '') {
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

export const BasicLayout: FC = () => {
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
    >
      <div style={{ minHeight: 'calc(100vh - 56px)' }}>
        <Suspense
          fallback={
            <div className="pt-11 text-center">
              <Spin />
            </div>
          }
        >
          <Outlet />
        </Suspense>
        <FormDialog.Portal />
        <FormDrawer.Portal />
      </div>
    </ProLayout>
  )
}
