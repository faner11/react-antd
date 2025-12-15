import { PageContainer } from '@ant-design/pro-components'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Button, Modal } from 'antd'
import { overlay } from 'overlay-kit'

export const Route = createLazyFileRoute('/_need-auth/command-modal')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PageContainer>
      <Button
        onClick={() => {
          overlay.open((props) => {
            return (
              <Modal
                afterClose={() => {
                  overlay.unmount(props.overlayId)
                }}
                onCancel={() => {
                  overlay.close(props.overlayId)
                }}
                onOk={() => {
                  overlay.close(props.overlayId)
                }}
                open={props.isOpen}
                title="Command Modal"
              >
                <div>test</div>
              </Modal>
            )
          })
        }}
        type="primary"
      >
        Command Modal
      </Button>
    </PageContainer>
  )
}
