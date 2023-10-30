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
import ReactEChartsCore from 'echarts-for-react/esm/core'
import type { EChartsReactProps } from 'echarts-for-react/esm/types'

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
function EChartsReact(props: EChartsReactProps) {
  return <ReactEChartsCore echarts={echarts} theme="MyTheme" {...props} />
}

export default EChartsReact
