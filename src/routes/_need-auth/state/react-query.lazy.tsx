import { PageContainer } from '@ant-design/pro-components'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Button, Card, Typography } from 'antd'
import { produce } from 'immer'
import { useState } from 'react'

import { TodosApi } from '@/api'
import { BaseApiConfig } from '@/comm/base-api.config'

export const Route = createLazyFileRoute('/_need-auth/state/react-query')({
  component: RouteComponent,
})
const todoApi = new TodosApi(BaseApiConfig)

function RouteComponent() {
  const [value, setValue] = useState({
    name: 'hello',
    current: 1,
  })

  const dataQuery = useSuspenseQuery({
    queryKey: ['HunBo4R11V16LmheHmTGZ', value],
    queryFn: async () => {
      const list = await todoApi.getTodos()
      return list
    },
  })

  return (
    <PageContainer
      extra={[
        <Button
          key="but1"
          loading={dataQuery.isFetching}
          onClick={() => {
            setValue(
              produce((draft) => {
                draft.current += 1
              }),
            )
          }}
        >
          next page
        </Button>,
      ]}
    >
      <Card loading={dataQuery.isFetching}>
        {dataQuery.data.map((item) => (
          <div key={item.id}>
            <Typography.Text type="secondary">{item.title}</Typography.Text>
          </div>
        ))}
      </Card>
    </PageContainer>
  )
}
