import { PageContainer } from '@ant-design/pro-components'
import { Card } from 'antd'
import type { FC } from 'react'

import EChartsReact from '@/components/Echarts'

const options = {
  grid: { top: 8, right: 8, bottom: 24, left: 36 },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
    },
  ],
  tooltip: {
    trigger: 'axis',
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
