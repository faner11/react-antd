English ｜[简体中文](./README.zh-cn.md)

# Development Notes

## Basic

- [pnpm](https://pnpm.io/zh/) Package Management Tools
- [vite](https://vitejs.dev/) Build Tools
- `typescript` Default development language

## CSS

- [tailwindcss](https://tailwindcss.com/) Atomic css tool library，Recommended use`tailwindcss` + `css in js` programs，<font style="color:red" >Abandon preprocessing tools like less, sass, etc.</font>。
- [emotion](https://emotion.sh/docs/introduction) css in js

## Status Management

- [react-query](https://react-query.tanstack.com/) Interface Status Management
- [jotai](https://jotai.org/) Local Status Management

## fetch Interface & Type Definition

- [@openapitools/openapi-generator-cli](https://openapi-generator.tech/) OpenAPI 2.0/3.x documentation generation interface and type definition, `pnpm run gcapi` calls openapitools.json to generate documentation, inputSpec can be filled with remote addresses, depend on docker。

# Form

- [formilyjs](https://formilyjs.org/zh-CN) Form rendering engine, `antd` projects are recommended to use
- [react-hook-form](https://react-hook-form.com/) React Hooks-based form library, recommended for `mui` projects
- [react-hook-form-mui](https://github.com/dohomi/react-hook-form-mui) Form component library based on `react-hook-form` and `mui`
- [Zod](https://github.com/colinhacks/zod) TypeScript-first schema validation with static type inference

## Other libraries

- [antd](https://ant.design)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start) v6
- **biomejs** <font style="color:red" >Forced use, forbidden to close</font>
- [classnames](https://github.com/JedWatson/classnames) css class name link combination
- [lodash-es](https://lodash.com/docs/) ES modules version of lodash
- [@ant-design/pro-components](https://procomponents.ant.design/components) Heavy components based on `antd`, including `ProLayout`, `ProTable`, etc.
- [ahooks](https://ahooks.js.org/zh-CN/) The react hook is a tool library
- [nice-modal-react](@ebay/nice-modal-react) Command-based pop-up library to increase code readability
- [echarts](https://github.com/apache/echarts) An Open Source JavaScript Visualization Library
- [echarts-for-react](https://github.com/hustcc/echarts-for-react) ECharts components for React wrapper
- [nanoid](https://github.com/ai/nanoid) A tiny (130 bytes), secure, URL-friendly, unique string ID generator for JavaScript

## Catalog Structure

- components Global components go here
- comm constants go here
- pages Page components are placed here
  - Home Home
    - assets Resources related to this feature
    - components Components for this feature page are placed here
    - index.tsx The entry file for Home
    - service The page logic abstraction is placed here

## Recommend

- table + query form refer to table/index.tsx demo
- Subpage container,Header settings,refer to home/index.tsx PageContainer
- Suggest using css in js to replace css,less,improve css maintainability
- breadcrumbs out of the box
