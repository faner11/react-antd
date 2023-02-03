import type { ProColumns } from '@ant-design/pro-components'
import { PageContainer, ProTable } from '@ant-design/pro-components'
import NiceModal from '@ebay/nice-modal-react'
import { Button } from 'antd'
import type { FC } from 'react'

import MyAntdModal from '@/components/MyAntdModal'
import { homeApi } from '@/services/home/home.api'
import { getTableData } from '@/utils'

const Home: FC = () => {
  const columns: ProColumns[] = [
    {
      title: 'name',
      dataIndex: 'name',
      copyable: true
    },
    {
      title: 'title',
      dataIndex: 'title',
      copyable: true,
      ellipsis: true
    },
    {
      title: 'status搜索',
      hideInTable: true,
      fieldProps: {
        showSearch: true
      },
      debounceTime: 500,
      request: async () => {
        return [
          { label: '全部', value: 'all' },
          { label: '未解决', value: 'open' },
          { label: '已解决', value: 'closed' },
          { label: '解决中', value: 'processing' }
        ]
      }
    },
    {
      title: 'status',
      dataIndex: 'status',
      search: false,
      valueEnum: {
        1: { text: '初始化', status: 'Default' },
        2: { text: '已生成', status: 'Success' },
        3: { text: '生成失败', status: 'Error' },
        4: { text: '其他' }
      }
    },
    {
      title: 'price',
      dataIndex: 'price',
      valueType: 'money'
    },
    {
      title: 'image',
      dataIndex: 'image',
      valueType: 'image',
      search: false
    }
  ]

  return (
    <PageContainer
      fixedHeader
      extra={
        <Button
          type='primary'
          onClick={() => {
            NiceModal.show(MyAntdModal, {
              title: '测试',
              children: <div>测试</div>
            })
          }}>
          弹窗测试
        </Button>
      }>
      <ProTable
        request={getTableData(homeApi.page)}
        columns={columns}
        rowKey='id'
      />
    </PageContainer>
  )
}

export default Home
