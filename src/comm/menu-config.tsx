import { HeartOutlined, SmileOutlined } from '@ant-design/icons'
import type { MenuDataItem } from '@ant-design/pro-components'

const asideMenuConfig: MenuDataItem[] = [
  {
    icon: <SmileOutlined />,
    name: 'Table',
    path: '/table',
  },
  {
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
    icon: <HeartOutlined />,
    name: 'State',
    path: '/state',
  },
  {
    icon: <HeartOutlined />,
    name: 'Command Modal',
    path: '/command-modal',
  },
]

export { asideMenuConfig }
