import { useRoutes } from 'react-router-dom'

import routerConfig from './routes'

function App() {
  const element = useRoutes(routerConfig)
  return element
}

export default App
