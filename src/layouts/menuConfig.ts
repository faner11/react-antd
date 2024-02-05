import { HeartOutlined, SmileOutlined } from "@ant-design/icons"
import type { MenuDataItem } from "@ant-design/pro-components"
import type { ForwardRefExoticComponent } from "react"

export const icons: Record<string, ForwardRefExoticComponent<any>> = {
  SmileOutlined,
  HeartOutlined,
}
const asideMenuConfig: MenuDataItem[] = [
  {
    name: "Table",
    path: "/",
    icon: "SmileOutlined",
  },
  {
    name: "State",
    path: "/state",
    icon: "HeartOutlined",
    children: [
      {
        name: "Jotai",
        path: "/state/jotai",
      },
      {
        name: "react-query",
        path: "/state/react-query",
      },
    ],
  },
  {
    name: "Form",
    path: "/form",
    icon: "HeartOutlined",
    children: [
      {
        name: "formily",
        path: "/form/formily",
      },
    ],
  },
  {
    name: "ECharts",
    path: "/echarts",
    icon: "HeartOutlined",
  },
]

export { asideMenuConfig }
