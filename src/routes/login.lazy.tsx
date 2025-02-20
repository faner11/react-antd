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
        logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        title="React-Antd"
        initialValues={{
          username: 'admin',
          password: '123456',
        }}
        subTitle="测试账号: admin/123456"
        onFinish={(values) => {
          const { username, password } = values
          if (username === 'admin' && password === '123456') {
            localStorage.setItem('login', 'true')
            location.href = search.redirect ?? '/'
            return Promise.resolve(true)
          }
          void message.error('账户名密码错误')
          return Promise.resolve(false)
        }}
      >
        <ProFormText
          name="username"
          fieldProps={{
            size: 'large',
            prefix: <UserOutlined className="prefixIcon" />,
          }}
          placeholder="请输入用户名"
          rules={[
            {
              required: true,
              message: '请输入用户名!',
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined className="prefixIcon" />,
          }}
          placeholder="请输入密码"
          rules={[
            {
              required: true,
              message: '请输入密码！',
            },
          ]}
        />
      </LoginFormPage>
    </div>
  )
}
