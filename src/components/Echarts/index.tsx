import * as echarts from 'echarts'
import ReactEChartsCore from 'echarts-for-react/esm/core'
import type { EChartsReactProps } from 'echarts-for-react/esm/types'
import type { FC } from 'react'

import indexedChartTheme from './EChartsTheme.json'

echarts.registerTheme('MyTheme', indexedChartTheme)
const EChartsReact: FC<EChartsReactProps> = (props) => {
  return <ReactEChartsCore echarts={echarts} theme='MyTheme' {...props} />
}

export default EChartsReact
