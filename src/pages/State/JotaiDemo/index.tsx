import { PageContainer } from '@ant-design/pro-components'
import { App, Button, Col, Row } from 'antd'
import { useSetAtom } from 'jotai'
import type { FC } from 'react'

import { countObjAtom, defaultStore } from './atom'
import Demo1 from './components/Demo1'
import Demo2 from './components/Demo2'

const JotaiDemo: FC = () => {
  const setCountObj = useSetAtom(countObjAtom)
  const { message } = App.useApp()
  return (
    <PageContainer
      extra={[
        <Button
          key='but1'
          onClick={() => {
            setCountObj((c) => {
              c.count = c.count + 1
            })
          }}
        >
          Add
        </Button>,
        <Button
          key='but2'
          onClick={() => {
            defaultStore.set(countObjAtom, { count: defaultStore.get(countObjAtom).count + 1 })
            void message.info(`${defaultStore.get(countObjAtom).count}`)
          }}
        >
          Store Add
        </Button>,
      ]}
    >
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
