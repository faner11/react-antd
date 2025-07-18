import { HeartOutlined, SmileOutlined } from '@ant-design/icons'
import type { MenuDataItem } from '@ant-design/pro-components'

const asideMenuConfig: MenuDataItem[] = [
  {
    name: 'Table',
    path: '/table',
    icon: <SmileOutlined />,
  },
  {
    name: 'State',
    path: '/state',
    icon: <HeartOutlined />,
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
