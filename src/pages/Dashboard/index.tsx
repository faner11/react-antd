import { PageContainer } from '@ant-design/pro-components'
import { useQuery } from '@tanstack/react-query'
import { Button, Typography } from 'antd'
import produce from 'immer'
import type { FC } from 'react'
import { useState } from 'react'

import { HomeApi } from '@/api'
import { BaseApiConfig } from '@/comm/baseApi.config'

const homeApi = new HomeApi(BaseApiConfig)
const Dashboard: FC = () => {
  const dataQuery = useQuery(['homeApi.getPage'], () => {
    return homeApi.getPage({ current: 1 })
  })
  console.log(dataQuery)

  const [value, setValue] = useState({
    name: 'hello',
    age: 18,
  })
  return (
    <PageContainer>
      <h2>Dashboard page</h2>
      <Button
        onClick={() => {
          // 只给某一个属性赋值
          setValue(
            produce((draft) => {
              draft.age = draft.age + 1
            }),
          )
        }}>
        {' '}
        add age
      </Button>
      <div>
        <Typography.Text>{JSON.stringify(value)}</Typography.Text>
      </div>
    </PageContainer>
  )
}
export default Dashboard
