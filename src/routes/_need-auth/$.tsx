import { PageContainer } from '@ant-design/pro-components'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button, Result } from 'antd'

export const Route = createFileRoute('/_need-auth/$')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  return (
    <PageContainer title={false}>
      <Result
        extra={
          <Button
            onClick={() => {
              void navigate({
                to: '/',
              })
            }}
            type="primary"
          >
            BACK HOME
          </Button>
        }
        status="404"
        subTitle="Page does not exist."
        title="404"
      />
    </PageContainer>
  )
}
