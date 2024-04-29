import { PageContainer } from '@ant-design/pro-components'
import { useQuery } from '@tanstack/react-query'
import { Button, Card, Typography } from 'antd'
import { produce } from 'immer'
import type { FC } from 'react'
import { useState } from 'react'

import { TodosApi } from '@/api'
import { BaseApiConfig } from '@/comm/baseApi.config'

const todoApi = new TodosApi(BaseApiConfig)
export const Component: FC = () => {
  const [value, setValue] = useState({
    name: 'hello',
    current: 1,
  })

  const dataQuery = useQuery({
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
          loading={dataQuery.isLoading}
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
      <Card loading={dataQuery.isLoading}>
        {dataQuery.data?.map((item) => (
          <div key={item.id}>
            <Typography.Text type="secondary">{item.title}</Typography.Text>
          </div>
        ))}
      </Card>
    </PageContainer>
  )
}
