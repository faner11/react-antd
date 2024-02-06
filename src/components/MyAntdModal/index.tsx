import NiceModal, { antdModalV5, useModal } from "@ebay/nice-modal-react"
import type { ModalProps } from "antd"
import { Modal } from "antd"
import type { FC, MouseEvent } from "react"
import { useState } from "react"
interface MyAntdModalProps extends ModalProps {
  onOk?: (e: MouseEvent<HTMLButtonElement>) => Promise<unknown>
}
const MyAntdModalComponent: FC<MyAntdModalProps> = (props) => {
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
        if (props?.onOk != null && onOk?.constructor.name === "AsyncFunction") {
          setLoading(true)
          onOk?.(e)?.finally(() => {
            setLoading(false)
          })
        }
        modal.resolve("ok")
        modal.hide()
      }}
    />
  )
}
export const MyAntdModal = NiceModal.create(MyAntdModalComponent)
