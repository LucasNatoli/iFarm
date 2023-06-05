import Card from "@mui/material/Card"
import { CardContent, CardHeader } from "@mui/material"
import Chart from 'react-apexcharts'


export default function PowerAndWaterChart() {

  const options = {
    chart: {
      id: 'consumo-agua-energia'
    },
    xaxis: {
      type: 'datetime',
      categories: ['26 May.', '27 May.', '28 May.', '29 May.', '30 May.', '31 May.', '1 Jun.', '2 Jun.', '3 Jun.']
    }
  }
  const series = [{
    name: 'Agua',
    data: [30, 40, 35, 50, 49, 60, 70, 71, 68]
  }, {
    name: 'Energia',
    data: [52, 60, 70, 66, 60, 62, 56, 65, 60]
  }]
  return (
    <Card>
      <CardHeader title="🔌 Consumos (Agua y Energia)" subheader="23/06 - 30/06" />
      <CardContent>
        <Chart options={options} series={series} type="line"  height={320} />
      </CardContent>
    </Card>
  )
}