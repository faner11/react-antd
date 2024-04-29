import type { IDrawerProps, IFormLayoutProps, IModalProps } from '@formily/antd-v5'
import { FormButtonGroup, FormDialog, FormDrawer, FormLayout, Submit } from '@formily/antd-v5'
import type { Form } from '@formily/core'
import { Button, message } from 'antd'
import type { ReactNode } from 'react'
interface Props {
  schemaField: ReactNode
  title: IModalProps
  onConfirm: (values: unknown, form: Form) => Promise<unknown>
  portalId?: string
  formLayoutProps?: IFormLayoutProps
}
export const openDefDialog = (props: Props) => {
  const { title, onConfirm, schemaField, portalId = 'form-dialog', formLayoutProps = { labelCol: 6 } } = props
  return FormDialog(title, portalId, () => <FormLayout {...formLayoutProps}>{schemaField}</FormLayout>).forConfirm(
    (form, next) => {
      onConfirm(form.values, form)
        .then(() => {
          void message.success('Operation succeeded')
          next()
        })
        .catch(() => {
          form.setSubmitting(false)
        })
    },
  )
}
interface FormDrawerProps {
  title: IDrawerProps
  formRender: (form: Form) => ReactNode
  onOk?: (val: unknown) => void
  okText?: ReactNode
  onClose?: () => void
  disabled?: boolean
  portalId?: string
}
export const openFormDrawer = (props: FormDrawerProps) => {
  const { title, formRender, onOk, okText = 'OK', onClose, disabled = false, portalId = 'form-drawer' } = props
  const drawer = FormDrawer({ ...title, maskClosable: true, onClose }, portalId, (form) => (
    <>
      {formRender(form)}
      <FormDrawer.Footer>
        <FormButtonGroup align="center">
          {!disabled && <Submit onSubmit={onOk}>{okText}</Submit>}
          <Button
            onClick={() => {
              onClose?.()
              drawer.close()
            }}
          >
            cancel
          </Button>
        </FormButtonGroup>
      </FormDrawer.Footer>
    </>
  ))
  return drawer
}

export const obj2List = (obj: Record<string, unknown>) =>
  Object.keys(obj).map((key) => ({
    label: obj[key],
    value: key,
  }))

export const list2Obj = (
  list?: {
    label: string
    value: string | number
    [key: string]: unknown
  }[],
) => {
  if (list == null) {
    return {}
  }
  return list.reduce<Record<string, string>>((draft, item) => {
    draft[item.value] = item.label
    return draft
  }, {})
}
