import { PageContainer } from "@ant-design/pro-components"
import { Button, Result } from "antd"
import type { FC } from "react"
import { useNavigate } from "react-router-dom"

export const Component: FC = () => {
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
              navigate("/")
            }}
          >
            BACK HOME
          </Button>
        }
      />
    </PageContainer>
  )
}
