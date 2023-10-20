import type { FC } from 'react'
import { RouterProvider } from 'react-router-dom'

import routerConfig from './routes'

const App: FC = () => {
  return <RouterProvider router={routerConfig} />
}

export default App
