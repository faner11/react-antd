import type { components } from '#comm'
import type { ProColumns } from '@ant-design/pro-components'

import { fetchClient } from '#comm'
import { PageContainer, ProTable } from '@ant-design/pro-components'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Popconfirm, Typography } from 'antd'

export const Route = createLazyFileRoute('/_need-auth/table/')({
  component: RouteComponent,
})

const columns: ProColumns<components['schemas']['post']>[] = [
  {
    dataIndex: 'date',
    title: 'date',
    valueType: 'dateWeek',
  },
  {
    copyable: true,
    dataIndex: 'title',
    ellipsis: true,
    title: 'title',
    width: 200,
  },
  {
    debounceTime: 500,
    fieldProps: {
      showSearch: true,
    },
    hideInTable: true,
    request: async () => {
      // oxlint-disable-next-line no-useless-promise-resolve-reject
      return Promise.resolve([
        { label: '全部', value: 'all' },
        { label: '未解决', value: 'open' },
        { label: '已解决', value: 'closed' },
        { label: '解决中', value: 'processing' },
      ])
    },
    title: 'status搜索',
  },
  {
    dataIndex: 'status',
    search: false,
    title: 'status',
    valueEnum: {
      1: { status: 'Default', text: '初始化' },
      2: { status: 'Success', text: '已生成' },
      3: { status: 'Error', text: '生成失败' },
      4: { text: '其他' },
    },
  },
  {
    dataIndex: 'price',
    title: 'price',
    valueType: 'money',
  },
  {
    dataIndex: 'image',
    search: false,
    title: 'image',
    valueType: 'image',
  },
  {
    key: 'action',
    render: (_dom, _entity, _i, action) => [
      <Typography.Link key="link1">Edit</Typography.Link>,
      <Popconfirm
        key="link2"
        onConfirm={() => {
          void action?.reload()
        }}
        title="Do you want to delete this row of data?"
      >
        <Typography.Link type="danger">Delete</Typography.Link>
      </Popconfirm>,
    ],
    title: 'Action',
    valueType: 'option',
  },
]
function RouteComponent() {
  return (
    <PageContainer fixedHeader>
      <ProTable
        columns={columns}
        request={async () => {
          const data = await fetchClient('get', '/posts', {})
          return {
            data,
            total: data.length,
          }
        }}
        rowKey="id"
      />
    </PageContainer>
  )
}
