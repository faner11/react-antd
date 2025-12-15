import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { LoginFormPage, ProFormText } from '@ant-design/pro-components'
import { createLazyFileRoute } from '@tanstack/react-router'
import { App } from 'antd'

export const Route = createLazyFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const search = Route.useSearch()
  const { message } = App.useApp()
  return (
    <div className="flex h-screen w-full flex-col bg-slate-200">
      <LoginFormPage
        backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
        initialValues={{
          password: '123456',
          username: 'admin',
        }}
        logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        onFinish={(values) => {
          const { password, username } = values
          if (username === 'admin' && password === '123456') {
            localStorage.setItem('login', 'true')
            location.href = search.redirect ?? '/'
            return Promise.resolve(true)
          }
          void message.error('账户名密码错误')
          return Promise.resolve(false)
        }}
        subTitle="测试账号: admin/123456"
        title="React-Antd"
      >
        <ProFormText
          fieldProps={{
            prefix: <UserOutlined className="prefixIcon" />,
            size: 'large',
          }}
          name="username"
          placeholder="请输入用户名"
          rules={[
            {
              message: '请输入用户名!',
              required: true,
            },
          ]}
        />
        <ProFormText.Password
          fieldProps={{
            prefix: <LockOutlined className="prefixIcon" />,
            size: 'large',
          }}
          name="password"
          placeholder="请输入密码"
          rules={[
            {
              message: '请输入密码！',
              required: true,
            },
          ]}
        />
      </LoginFormPage>
    </div>
  )
}
