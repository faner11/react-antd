import NiceModal, { antdModalV5, useModal } from '@ebay/nice-modal-react'
import type { ModalProps } from 'antd'
import { Modal } from 'antd'
import { isNil } from 'es-toolkit'
import type { MouseEvent } from 'react'
import { useState } from 'react'
interface MyAntdModalProps extends Omit<ModalProps, 'onOk'> {
  onOk?: (e: MouseEvent<HTMLButtonElement>) => Promise<unknown>
}
const MyAntdModalComponent = (props: MyAntdModalProps) => {
  const modal = useModal()
  const [loading, setLoading] = useState(false)
  const { onOk } = props
  return (
    <Modal
      {...antdModalV5(modal)}
      {...props}
      okButtonProps={{
        loading,
      }}
      onOk={(e) => {
        if (isNil(props.onOk) && onOk?.constructor.name === 'AsyncFunction') {
          setLoading(true)
          void onOk(e).finally(() => {
            setLoading(false)
          })
        }
        modal.resolve('ok')
        void modal.hide()
      }}
    />
  )
}
export const MyAntdModal = NiceModal.create(MyAntdModalComponent)
