import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const Greeting = () => {
  const navigate = useNavigate()
  return (
    <Result
      status="404"
      title="404"
      subTitle="页面不存在"
      extra={
        <Button
          type="primary"
          onClick={() => {
            navigate('/')
          }}>
          前往首页
        </Button>
      }
    />
  )
}

export default Greeting
