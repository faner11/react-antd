import type { ProColumns } from '@ant-design/pro-components'
import { PageContainer, ProTable } from '@ant-design/pro-components'
import NiceModal from '@ebay/nice-modal-react'
import { Button, Popconfirm, Typography } from 'antd'
import type { FC } from 'react'

import type { PageItem } from '@/api'
import { HomeApi } from '@/api'
import { BaseApiConfig } from '@/comm/baseApi.config'
import MyAntdModal from '@/components/MyAntdModal'
import { transformTableData } from '@/utils'

const homeApi = new HomeApi(BaseApiConfig)

const TablePage: FC = () => {
  const columns: ProColumns<PageItem>[] = [
    {
      title: 'title',
      dataIndex: 'title',
      copyable: true,
      ellipsis: true,
    },
    {
      title: 'status搜索',
      hideInTable: true,
      fieldProps: {
        showSearch: true,
      },
      debounceTime: 500,
      request: async () => {
        return [
          { label: '全部', value: 'all' },
          { label: '未解决', value: 'open' },
          { label: '已解决', value: 'closed' },
          { label: '解决中', value: 'processing' },
        ]
      },
    },
    {
      title: 'status',
      dataIndex: 'status',
      search: false,
      valueEnum: {
        1: { text: '初始化', status: 'Default' },
        2: { text: '已生成', status: 'Success' },
        3: { text: '生成失败', status: 'Error' },
        4: { text: '其他' },
      },
    },
    {
      title: 'price',
      dataIndex: 'price',
      valueType: 'money',
    },
    {
      title: 'image',
      dataIndex: 'image',
      valueType: 'image',
      search: false,
    },
    {
      title: 'Action',
      key: 'action',
      valueType: 'option',
      render: (dom, entity, i, action) => {
        return [
          <Typography.Link
            key='link1'
            onClick={() => {
              console.log(entity)
            }}>
            Edit
          </Typography.Link>,
          <Popconfirm
            key='link2'
            title='Do you want to delete this row of data?'
            onConfirm={() => {
              console.log('delete')
              action?.reload()
            }}>
            <Typography.Link type='danger'>Delete</Typography.Link>
          </Popconfirm>,
        ]
      },
    },
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
              children: <div>测试</div>,
            })
          }}>
          弹窗测试
        </Button>
      }>
      <ProTable
        request={async (params) => {
          const res = await homeApi.getPage(params)
          return transformTableData(res)
        }}
        columns={columns}
        rowKey='id'
      />
    </PageContainer>
  )
}

export default TablePage
