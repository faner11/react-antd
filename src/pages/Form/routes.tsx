import type { RouteObject } from "react-router-dom"

export const formRouters: RouteObject[] = [
  {
    path: "formily",
    lazy: () => import("@/pages/Form"),
  },
]
