import NiceModal, { antdModalV5, useModal } from '@ebay/nice-modal-react'
import type { ModalProps } from 'antd'
import { Modal } from 'antd'
import { type FC, useState } from 'react'

const MyAntdModal: FC<ModalProps> = (props) => {
  const modal = useModal()
  const [loading, setLoading] = useState(false)
  return (
    <Modal
      {...antdModalV5(modal)}
      {...props}
      okButtonProps={{
        loading,
      }}
      onOk={async (e) => {
        if (props?.onOk instanceof Function && props.onOk.constructor.name === 'AsyncFunction') {
          setLoading(true)
          await Promise.resolve(props.onOk(e)).finally(() => {
            setLoading(false)
          })
        }
        modal.resolve('ok')
        modal.hide()
      }}
    />
  )
}

export default NiceModal.create(MyAntdModal)
