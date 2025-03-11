import { Result } from 'antd'
import type { FC } from 'react'
interface ErrorComponentProps {
  error: Error
}
export const ErrorComponent: FC<ErrorComponentProps> = (props) => {
  const { error } = props
  return <Result status="error" title="Something went wrong" subTitle={error.message} />
}
