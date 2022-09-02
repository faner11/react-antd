import { Global } from '@emotion/react'

const AntdGlobalCssFix = () => {
  return (
    <Global
      styles={{
        '.ant-image-preview-img': {
          display: 'unset'
        },
        svg: {
          verticalAlign: 'initial'
        }
      }}
    />
  )
}
export default AntdGlobalCssFix
