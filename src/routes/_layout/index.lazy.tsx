import { PageContainer } from '@ant-design/pro-components'
import { createLazyFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_layout/')({
  component: Home,
})

function Home() {
  return (
    <PageContainer>
      <div className="p-2">
        <h3>Welcome Home!</h3>
      </div>
      <Outlet />
    </PageContainer>
  )
}
