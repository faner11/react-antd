import { PageContainer } from '@ant-design/pro-components'
import { ArrayItems, Editable, Form, FormButtonGroup, Submit } from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Button, Card, message } from 'antd'
import { useMemo } from 'react'

import { openDefDialog, SchemaField } from '@/components/form'

import { schema } from './__private/service'

export const Route = createLazyFileRoute('/_layout/form/formily')({
  component: RouteComponent,
})
const openDialog = () => {
  const dialog = openDefDialog({
    title: { title: 'Dialog Title' },
    schemaField: <SchemaField schema={schema} components={{ ArrayItems, Editable }} />,
    async onConfirm() {
      await Promise.resolve()
    },
  })
  return dialog
}
function RouteComponent() {
  const form = useMemo(
    () =>
      createForm({
        validateFirst: true,
      }),
    [],
  )
  return (
    <PageContainer
      extra={[
        <Button
          key="but1"
          onClick={() => {
            void openDialog().open()
          }}
        >
          Open Modal
        </Button>,
      ]}
    >
      <Card>
        <Form
          form={form}
          labelCol={5}
          wrapperCol={16}
          onAutoSubmit={() => {
            void message.info('onAutoSubmit')
          }}
        >
          <SchemaField schema={schema} components={{ ArrayItems, Editable }} />
          <FormButtonGroup.FormItem>
            <Submit block={true} size="large">
              Submit
            </Submit>
          </FormButtonGroup.FormItem>
        </Form>
      </Card>
    </PageContainer>
  )
}
