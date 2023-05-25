import { PageContainer } from '@ant-design/pro-components'
import { Card } from 'antd'
import type { EChartsOption } from 'echarts'
import type { FC } from 'react'

import EChartsReact from '@/components/Echarts'

const data = [
  {
    value1: 1200,
    value2: 300,
    value3: 482,
    name: 'Mon',
  },
  {
    name: 'Tue',
    value1: 300,
    value2: 500,
    value3: 882,
  },
  {
    name: 'Wed',
    value1: 4000,
    value2: 100,
    value3: 982,
  },
  {
    name: 'Thu',
    value1: 230,
    value2: 820,
    value3: 662,
  },
  {
    name: 'Fri',
    value1: 666,
    value2: 777,
    value3: 888,
  },
  {
    name: 'Sat',
    value1: 222,
    value2: 333,
    value3: 444,
  },
  {
    value1: 888,
    value2: 666,
    value3: 111,
    name: 'Sun',
  },
]
const dimensions = ['name', 'value1', 'value2', 'value3']
const options: EChartsOption = {
  dataset: {
    dimensions,
    source: data,
  },
  grid: { top: 24, right: 0, bottom: 36, left: 0, containLabel: true },
  xAxis: {
    type: 'category',
  },
  yAxis: {
    type: 'value',
  },
  series: Array.from({ length: dimensions.length - 1 }).map(() => {
    return {
      type: 'line',
      smooth: true,
    }
  }),
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    bottom: 0,
  },
}
const EchartsPage: FC = () => {
  return (
    <PageContainer>
      <Card>
        <EChartsReact option={options} />
      </Card>
    </PageContainer>
  )
}
export default EchartsPage
