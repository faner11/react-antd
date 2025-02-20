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
        status="404"
        title="404"
        subTitle="Page does not exist."
        extra={
          <Button
            type="primary"
            onClick={() => {
              void navigate({
                to: '/',
              })
            }}
          >
            BACK HOME
          </Button>
        }
      />
    </PageContainer>
  )
}
