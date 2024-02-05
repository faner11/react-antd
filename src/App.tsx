import type { FC } from "react"
import { RouterProvider } from "react-router-dom"
import { routerConfig } from "./routes"

export const App: FC = () => {
  return <RouterProvider router={routerConfig} />
}
