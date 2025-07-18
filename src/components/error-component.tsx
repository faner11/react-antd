import type { ErrorComponentProps } from '@tanstack/react-router'
import { Result } from 'antd'

export const ErrorComponent = (props: ErrorComponentProps) => {
  const { error } = props
  return <Result status="error" title="Something went wrong" subTitle={error.message} />
}
