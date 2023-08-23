import { PageContainer } from '@ant-design/pro-components';
import {
  ArrayItems,
  Editable,
  Form,
  FormButtonGroup,
  Submit,
} from '@formily/antd-v5';
import { createForm } from '@formily/core';
import { Button, Card, message } from 'antd';
import { useMemo } from 'react';

import { openDefDialog, SchemaField } from '@/components/form';

import { schema } from './service/schema';

const openDialog = () => {
  const dialog = openDefDialog({
    title: 'Dialog Title',
    schemaField: (
      <SchemaField schema={schema} components={{ ArrayItems, Editable }} />
    ),
    async onConfirm() {
      await Promise.resolve();
    },
  });
  return dialog;
};
function FormPage() {
  const form = useMemo(
    () => createForm({
      validateFirst: true,
    }),
    [],
  );
  return (
    <PageContainer
      extra={[
        <Button
          key="but1"
          onClick={() => {
            openDialog().open();
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
            message.info('onAutoSubmit');
          }}
        >
          <SchemaField schema={schema} components={{ ArrayItems, Editable }} />
          <FormButtonGroup.FormItem>
            <Submit block size="large">
              Submit
            </Submit>
          </FormButtonGroup.FormItem>
        </Form>
      </Card>
    </PageContainer>
  );
}

export default FormPage;
