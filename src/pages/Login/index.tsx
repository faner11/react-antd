import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { LoginFormPage, ProFormText } from "@ant-design/pro-components"
import { App } from "antd"
import type { FC } from "react"
import useSignIn from "react-auth-kit/hooks/useSignIn"
import { useNavigate } from "react-router-dom"

export const Component: FC = () => {
  const navigate = useNavigate()
  const signIn = useSignIn()
  const { message } = App.useApp()
  return (
    <div className="flex flex-col  w-full h-screen bg-slate-200">
      <LoginFormPage
        backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
        logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        title="React-Antd"
        initialValues={{
          username: "admin",
          password: "123456",
        }}
        subTitle="测试账号: admin/123456"
        onFinish={(values) => {
          const { username, password } = values
          if (username === "admin" && password === "123456") {
            const isSign = signIn({
              auth: {
                token:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjk5OTk5OTk5OTk5fQ.Z4_FVGQ5lIcouP3m4YLMr6pGMF17IJFfo2yOTiN58DY",
                type: "Bearer",
                // expiresIn: 2880,
                // authState: { name: "React User", uid: 123456 },
              },
              refresh: "",
              userState: { name: "React User", uid: 123456 },
            })
            if (isSign) {
              navigate("/")
            } else {
              message.error("error")
            }
            return Promise.resolve(true)
          }
          message.error("账户名密码错误")
          return Promise.resolve(false)
        }}
      >
        <ProFormText
          name="username"
          fieldProps={{
            size: "large",
            prefix: <UserOutlined className="prefixIcon" />,
          }}
          placeholder="请输入用户名"
          rules={[
            {
              required: true,
              message: "请输入用户名!",
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: "large",
            prefix: <LockOutlined className="prefixIcon" />,
          }}
          placeholder="请输入密码"
          rules={[
            {
              required: true,
              message: "请输入密码！",
            },
          ]}
        />
      </LoginFormPage>
    </div>
  )
}
