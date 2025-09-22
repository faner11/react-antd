English ｜[简体中文](./README.zh-cn.md)

This is a development experience-friendly React SPA template that combines the most advanced and coolest technical solutions, helping you solve all problems outside of business logic.

# Development Notes

## Basic

- [pnpm](https://pnpm.io/zh/) Package Management Tools
- [vite](https://vitejs.dev/) Build Tools
- `typescript` Default development language

## CSS

- [tailwindcss](https://tailwindcss.com/) Atomic css tool library，Recommended use`tailwindcss` + `css in js` programs，<font style="color:red" >Abandon preprocessing tools like less, sass, etc.</font>。
- [clsx](https://github.com/lukeed/clsx) css class name link combination

## Generative routing
- [@tanstack/react-router](https://github.com/TanStack/router) Fully typesafe Router for React (and friends) w/ built-in caching, 1st class search-param APIs, client-side cache integration and isomorphic rendering.

## Status Management

- [@tanstack/query](https://tanstack.com/query/latest/docs/framework/react/overview) API Interface Status Management
- [jotai](https://jotai.org/) Local Status Management

## fetch Interface & Type Definition

- [openapi-fetch](https://github.com/openapi-ts/openapi-typescript) Generate interface definitions and type declarations based on OpenAPI/Swagger. When generating, run `pnpm run gc-open-api` and modify the OpenAPI URL.

## Form

- [@ant-design/pro-components](https://procomponents.ant.design/components) You can use the From capability provided by `@ant-design/pro-components`
- [@tanstack/form](https://tanstack.com/form) If you prefer type-safe Form, `@tanstack/form` is a better choice
- [Zod](https://github.com/colinhacks/zod) TypeScript-first schema validation with static type inference

## Lint/Format
- [eslint](https://eslint.org/) Only used to check rules that oxlint does not support
- [oxlint](https://github.com/oxc-project/oxc) Rust version of eslint
- [biomejs](https://biomejs.dev/)  Currently only used for format

## Command pop-up 
- [overlay-kit](https://github.com/toss/overlay-kit) Command-based pop-up library to increase code readability

## Other libraries
- [antd](https://ant.design)
- [@ant-design/pro-components](https://procomponents.ant.design/components) Heavy components based on `antd`, including `ProLayout`, `ProTable`, etc.
- [es-toolkit](https://es-toolkit.slash.page/) State-of-the-art JavaScript utility library
- [ahooks](https://ahooks.js.org/zh-CN/) The react hook is a tool library
