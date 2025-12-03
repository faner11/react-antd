[English](https://github.com/faner11/react-antd)｜简体中文

这是一个开发体验友好的 React SPA 脚手架，组合了当前最先进最酷的技术方案，帮你解决了业务逻辑之外的所有问题。

# 开发须知

## 基础

- [pnpm](https://pnpm.io/zh/) 包管理工具
- [vite](https://vitejs.dev/) 构建工具
- `typescript` 默认开发语言

## CSS

- [tailwindcss](https://tailwindcss.com/) 原子化 css 工具库，建议使用`tailwindcss` + `css in js`方案，<font style="color:red" >放弃 less，sass 之类预处理工具</font>。
- [clsx](https://github.com/lukeed/clsx)  css 类名连接组合

## 生成式路由
- [@tanstack/react-router](https://github.com/TanStack/router) Fully typesafe Router for React (and friends) w/ built-in caching, 1st class search-param APIs, client-side cache integration and isomorphic rendering.

## 状态管理

- [@tanstack/query](https://tanstack.com/query/latest/docs/framework/react/overview) API 接口状态管理
- [jotai](https://jotai.org/) 本地状态管理

## fetch 接口&类型定义

- [openapi-fetch](https://github.com/openapi-ts/openapi-typescript) 根据 OpenAPI/Swagger 生成API接口与类型声明. 请先将 `package.json` 中的 `gc-open-api`  URL 改为自己的的OpenAPI URL，然后运行 `pnpm run gc-open-api`即可。

## Form

- [@ant-design/pro-components](https://procomponents.ant.design/components) 可以使用 `@ant-design/pro-components` 提供的From 能力
- [@tanstack/form](https://tanstack.com/form) 如果你更喜欢类型安全的Form, `@tanstack/form` 是更好的选择


## Lint/Format
- [eslint](https://eslint.org/) 仅用来检查oxlint 不支持的规则
- [oxlint](https://github.com/oxc-project/oxc) rust 版本的 eslint
- [oxfmt](https://github.com/oxc-project/oxc) 当前仅用来format

## 命令式弹窗
- [overlay-kit](https://github.com/toss/overlay-kit) 命令式弹窗库，增加代码可读性

## 其他库

- [antd](https://ant.design/index-cn) 已预设相关配置
- [@ant-design/pro-components](https://procomponents.ant.design/components) 基于`antd`的重型组件,包含`ProLayout`,`ProTable`等
- [es-toolkit](https://es-toolkit.slash.page/) 先进的 JavaScript 实用程序库
- [ahooks](https://ahooks.js.org/zh-CN/) react hook 是工具库


