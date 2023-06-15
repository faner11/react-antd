import NiceModal, { antdModalV5, useModal } from '@ebay/nice-modal-react'
import type { ModalProps } from 'antd'
import { Modal } from 'antd'
import { type FC, useState } from 'react'

interface MyAntdModalProps extends ModalProps {
  onOk?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<any> | any
}
const MyAntdModal: FC<MyAntdModalProps> = (props) => {
  const modal = useModal()
  const [loading, setLoading] = useState(false)
  return (
    <Modal
      {...antdModalV5(modal)}
      {...props}
      okButtonProps={{
        loading,
      }}
      onOk={(e) => {
        if (props?.onOk != null && props.onOk.constructor.name === 'AsyncFunction') {
          setLoading(true)
          props.onOk(e)?.finally(() => {
            setLoading(false)
          })
        }
        modal.resolve('ok')
        void modal.hide()
      }}
    />
  )
}

export default NiceModal.create(MyAntdModal)
