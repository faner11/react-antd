import { PageContainer } from '@ant-design/pro-components'
import { ArrayItems, Editable, Form, FormButtonGroup, Submit } from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { Button, Card } from 'antd'
import type { FC } from 'react'
import { useMemo } from 'react'

import { SchemaField } from '@/components/form'

import { schema } from './service/schema'

const FormPage: FC = () => {
  const form = useMemo(() => {
    return createForm({
      validateFirst: true,
    })
  }, [])
  return (
    <PageContainer extra={[<Button key='but1'>打开弹窗</Button>]}>
      <Card>
        <Form
          form={form}
          labelCol={5}
          wrapperCol={16}
          onAutoSubmit={() => {
            console.log('onAutoSubmit')
          }}>
          <SchemaField schema={schema} components={{ ArrayItems, Editable }} />
          <FormButtonGroup.FormItem>
            <Submit block size='large'>
              提交
            </Submit>
          </FormButtonGroup.FormItem>
        </Form>
      </Card>
    </PageContainer>
  )
}

export default FormPage
