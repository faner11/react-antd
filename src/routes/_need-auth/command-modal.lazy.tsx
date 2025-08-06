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
        type="primary"
        onClick={() => {
          overlay.open((props) => {
            return (
              <Modal
                title="Command Modal"
                open={props.isOpen}
                onCancel={() => {
                  overlay.close(props.overlayId)
                }}
                afterClose={() => {
                  overlay.unmount(props.overlayId)
                }}
                onOk={() => {
                  overlay.close(props.overlayId)
                }}
              >
                <div>test</div>
              </Modal>
            )
          })
        }}
      >
        Command Modal
      </Button>
    </PageContainer>
  )
}
