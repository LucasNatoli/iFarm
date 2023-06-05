import Card from "@mui/material/Card"
import { CardContent, CardHeader } from "@mui/material"
import Chart from 'react-apexcharts'

export default function FeedingChart() {

  const options = {
    chart: {
      id: 'dosificacion-nutrientes'
    },
    xaxis: {
      type: 'datetime',
      categories: ['26 May.', '27 May.', '28 May.', '29 May.', '30 May.', '31 May.', '1 Jun.', '2 Jun.', '3 Jun.']
    }
  }

  const series = [{
    name: 'Micro',
    data: [45, 49, 50, 49, 60, 70, 71, 68, 63]
  }, {
    name: 'Macro',
    data: [52, 60, 70, 66, 60, 62, 56, 65, 60]
  }, {
    name: 'Ph +',
    data: [0, 0, 0, 0, 5, 0, 0, 0, 0]
  }, {
    name: 'Ph -',
    data: [6, 6, 4, 0, 0, 0, 0, 1, 3]
  }]
  
  return (
    <Card>
      <CardHeader title="Dosificación de Nutrientes" subheader="23/06 - 30/06"/>
      <CardContent>
        <Chart options={options} series={series} type="bar"  height={320} />
      </CardContent>
    </Card>
  )
}