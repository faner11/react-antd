import { Typography } from "antd"
import { useAtomValue } from "jotai"

import type { FC } from "react"
import { countObjAtom } from "../atom"

export const Demo2: FC = () => {
  const countObj = useAtomValue(countObjAtom)

  return (
    <>
      <Typography.Title level={4}>DEMO 2</Typography.Title>
      <Typography.Text>const :{countObj.count}</Typography.Text>
    </>
  )
}
