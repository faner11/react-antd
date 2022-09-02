import type { MenuDataItem } from '@ant-design/pro-layout'
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout'
import { Spin } from 'antd'
import type { ReactNode } from 'react'
import { createElement, Suspense } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import type { IndexeMenuItem } from './menuConfig'
import { asideMenuConfig, icons } from './menuConfig'

const loopMenuItem: any = (menus: IndexeMenuItem[]) =>
  menus.map(({ icon, children, ...item }) => ({
    ...item,
    icon: icons[icon] ? createElement(icons[icon] as any) : undefined,
    children: children && loopMenuItem(children)
  }))

export default function BasicLayout() {
  const location = useLocation()

  return (
    <ProLayout
      logo="https://indexed.obs.cn-east-3.myhuaweicloud.com/statics/img/suoyin-logo.svg"
      title=""
      style={{
        minHeight: '100vh'
      }}
      location={{
        pathname: location.pathname
      }}
      layout="mix"
      navTheme="light"
      headerTheme="light"
      menuDataRender={() => loopMenuItem(asideMenuConfig)}
      menuItemRender={(item: MenuDataItem, defaultDom: ReactNode) => {
        if (!item.path) {
          return defaultDom
        }
        return <Link to={item.path}>{defaultDom}</Link>
      }}
      breadcrumbProps={{
        itemRender: (route) => {
          return <Link to={route.path}>{route.breadcrumbName}</Link>
        }
      }}
      fixSiderbar
      fixedHeader
      footerRender={() => <DefaultFooter copyright="索引科技" />}>
      <div style={{ minHeight: '60vh' }}>
        <Suspense
          fallback={
            <div className="text-center pt-11">
              <Spin />
            </div>
          }>
          <Outlet />
        </Suspense>
      </div>
    </ProLayout>
  )
}
