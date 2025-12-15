import type { MenuDataItem } from '@ant-design/pro-components'

import { HeartOutlined, SmileOutlined } from '@ant-design/icons'

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
