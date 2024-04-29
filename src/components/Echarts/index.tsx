import { BarChart, LineChart, PieChart } from 'echarts/charts'
import {
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  TransformComponent,
} from 'echarts/components'
import * as echarts from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import ReactEchartsCore from 'echarts-for-react/esm/core'
import type { EChartsReactProps } from 'echarts-for-react/esm/types'
import type { FC } from 'react'

import indexedChartTheme from './EChartsTheme.json'

echarts.use([
  BarChart,
  LineChart,
  PieChart,
  DatasetComponent,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  TransformComponent,
  CanvasRenderer,
  LegendComponent,
])
echarts.registerTheme('MyTheme', indexedChartTheme)
export const EchartsReact: FC<EChartsReactProps> = (props) => {
  return <ReactEchartsCore echarts={echarts} theme="MyTheme" {...props} />
}
