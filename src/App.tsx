import { Spin } from 'antd'
import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routerConfig from './routes'

function App () {
  const element = useRoutes(routerConfig)
  return (
    <Suspense fallback={(<div className='text-center pt-11'><Spin /></div>)}>
      {element}
    </Suspense>
  )
}

export default App
