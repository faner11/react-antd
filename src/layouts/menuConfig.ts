import { HeartOutlined, SmileOutlined } from '@ant-design/icons'
import type { MenuDataItem } from '@ant-design/pro-components'
import type { ForwardRefExoticComponent } from 'react'

export const icons: Record<string, ForwardRefExoticComponent<any>> = {
  SmileOutlined,
  HeartOutlined
}
const asideMenuConfig: MenuDataItem[] = [
  {
    name: 'home',
    path: '/',
    icon: 'SmileOutlined'
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'HeartOutlined',
    children: [
      {
        name: 'Dashboard Page1',
        path: '/dashboard/page1',
        icon: 'SmileOutlined'
      }
    ]
  }
]

export { asideMenuConfig }
