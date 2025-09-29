import type { ProColumns } from '@ant-design/pro-components'
import { PageContainer, ProTable } from '@ant-design/pro-components'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Popconfirm, Typography } from 'antd'

import type { components } from '#comm'
import { fetchClient } from '#comm'

export const Route = createLazyFileRoute('/_need-auth/table/')({
  component: RouteComponent,
})

const columns: ProColumns<components['schemas']['post']>[] = [
  {
    title: 'date',
    dataIndex: 'date',
    valueType: 'dateWeek',
  },
  {
    title: 'title',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    width: 200,
  },
  {
    title: 'status搜索',
    hideInTable: true,
    fieldProps: {
      showSearch: true,
    },
    debounceTime: 500,
    request: async () => {
      // oxlint-disable-next-line no-useless-promise-resolve-reject
      return Promise.resolve([
        { label: '全部', value: 'all' },
        { label: '未解决', value: 'open' },
        { label: '已解决', value: 'closed' },
        { label: '解决中', value: 'processing' },
      ])
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
    render: (_dom, _entity, _i, action) => [
      <Typography.Link key="link1">Edit</Typography.Link>,
      <Popconfirm
        key="link2"
        title="Do you want to delete this row of data?"
        onConfirm={() => {
          void action?.reload()
        }}
      >
        <Typography.Link type="danger">Delete</Typography.Link>
      </Popconfirm>,
    ],
  },
]
function RouteComponent() {
  return (
    <PageContainer fixedHeader>
      <ProTable
        request={async () => {
          const data = await fetchClient('get', '/posts', {})
          return {
            data,
            total: data.length,
          }
        }}
        columns={columns}
        rowKey="id"
      />
    </PageContainer>
  )
}
