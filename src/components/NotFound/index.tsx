import { PageContainer } from '@ant-design/pro-components'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

function NotFound() {
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
              navigate('/')
            }}
          >
            BACK HOME
          </Button>
        }
      />
    </PageContainer>
  )
}

export default NotFound
