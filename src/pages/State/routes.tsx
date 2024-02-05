import type { RouteObject } from "react-router-dom"

export const dashboardRouters: RouteObject[] = [
  {
    path: "jotai",
    lazy: () => import("@/pages/State/JotaiDemo"),
  },
  {
    path: "react-query",
    lazy: () => import("@/pages/State/ReactQueryDemo"),
  },
]
