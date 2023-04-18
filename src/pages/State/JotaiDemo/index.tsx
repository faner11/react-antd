import { PageContainer } from '@ant-design/pro-components'
import { Button, Col, Row } from 'antd'
import { useAtom } from 'jotai'
import type { FC } from 'react'

import { countObjAtom } from './atom'
import Demo1 from './components/Demo1'
import Demo2 from './components/Demo2'

const JotaiDemo: FC = () => {
  const [, setCountObj] = useAtom(countObjAtom)
  return (
    <PageContainer
      extra={[
        <Button
          key='but1'
          onClick={() => {
            setCountObj((c) => {
              c.count = c.count + 1
            })
          }}>
          Add
        </Button>,
      ]}>
      <Row>
        <Col span={12}>
          <Demo1 />
        </Col>{' '}
        <Col span={12}>
          <Demo2 />
        </Col>
      </Row>
    </PageContainer>
  )
}
export default JotaiDemo
