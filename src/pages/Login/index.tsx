import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginFormPage, ProFormText } from '@ant-design/pro-components';
import { App } from 'antd';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const signIn = useSignIn();
  const { message } = App.useApp();
  return (
    <div className="flex flex-col  w-full h-screen bg-slate-200">
      <LoginFormPage
        backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
        logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        title="React-Antd"
        initialValues={{
          username: 'admin',
          password: '123456',
        }}
        subTitle="测试账号: admin/123456"
        onFinish={async (values) => {
          const { username, password } = values;
          if (username === 'admin' && password === '123456') {
            const isSign = signIn({
              token: '35v3443bn368367n306306wbn407qn420b436b4',
              tokenType: 'Bearer',
              expiresIn: 2880,
              authState: { name: 'React User', uid: 123456 },
            });
            if (isSign) {
              navigate('/');
            } else {
              message.error('error');
            }
            return Promise.resolve(true);
          }
          message.error('账户名密码错误');
          return Promise.resolve(false);
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
  );
}

export default Login;
