import { PageContainer } from '@ant-design/pro-components'
import { createLazyFileRoute } from '@tanstack/react-router'
import { App, Button, Col, Row } from 'antd'
import { useSetAtom } from 'jotai'

import { countObjAtom, defaultStore } from './__private/atom'
import { Demo1 } from './__private/Demo1'
import { Demo2 } from './__private/Demo2'

export const Route = createLazyFileRoute('/_layout/state/jotai/')({
  component: RouteComponent,
})

function RouteComponent() {
  const setCountObj = useSetAtom(countObjAtom)
  const { message } = App.useApp()
  return (
    <PageContainer
      extra={[
        <Button
          key="but1"
          onClick={() => {
            setCountObj((draft) => {
              draft.count += 1
            })
          }}
        >
          Add
        </Button>,
        <Button
          key="but2"
          onClick={() => {
            defaultStore.set(countObjAtom, {
              count: defaultStore.get(countObjAtom).count + 1,
            })
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
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
        </Col>
        <Col span={12}>
          <Demo2 />
        </Col>
      </Row>
    </PageContainer>
  )
}
