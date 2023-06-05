import Card from "@mui/material/Card"
import { CardContent, CardHeader } from "@mui/material"
import Chart from 'react-apexcharts'

export default function ReservoirSensorsChart() {

  const options = {
    chart: {
      id: 'sensores-reservorio'
    },
    xaxis: {
      type: 'datetime',
      categories: ['26 May.', '27 May.', '28 May.', '29 May.', '30 May.', '31 May.', '1 Jun.', '2 Jun.', '3 Jun.']
    }
  }

  const series = [{
    name: 'PH',
    data: [40, 35, 50, 49, 60, 70, 71, 68, 63]
  }, {
    name: 'EC',
    data: [52, 60, 70, 66, 60, 62, 56, 65, 60]
  }, {
    name: 'TDS',
    data: [70, 66, 60, 62, 56, 65, 60, 55, 67]
  }]
  
  return (
    <Card>
      <CardHeader title="🧪 Lecturas del reservorio" subheader="23/06 - 30/06"/>
      <CardContent>
        <Chart options={options} series={series} type="line"  height={320} />
      </CardContent>
    </Card>
  )
}