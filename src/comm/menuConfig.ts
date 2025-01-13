import { HeartOutlined, SmileOutlined } from '@ant-design/icons'
import type { MenuDataItem } from '@ant-design/pro-components'
import type { FC } from 'react'

export const icons: Record<string, FC> = {
  SmileOutlined,
  HeartOutlined,
}
const asideMenuConfig: MenuDataItem[] = [
  {
    name: 'Table',
    path: '/table',
    icon: 'SmileOutlined',
  },
  {
    name: 'State',
    path: '/state',
    icon: 'HeartOutlined',
    children: [
      {
        name: 'Jotai',
        path: '/state/jotai',
      },
      {
        name: 'react-query',
        path: '/state/react-query',
      },
    ],
  },
]

export { asideMenuConfig }
