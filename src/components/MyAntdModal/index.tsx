import NiceModal, { useModal } from '@ebay/nice-modal-react'
import type { ModalProps } from 'antd'
import { Modal } from 'antd'
import type { FC } from 'react'

const MyAntdModal: FC<ModalProps> = (props) => {
  const { children, title } = props
  const modal = useModal()
  return (
    <Modal
      title={title}
      onOk={() => modal.hide()}
      open={modal.visible}
      onCancel={() => modal.hide()}
      afterClose={() => modal.remove()}>
      {children}
    </Modal>
  )
}

export default NiceModal.create(MyAntdModal)
