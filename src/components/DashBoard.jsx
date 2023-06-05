
import { Grid } from '@mui/material'
import PowerAndWaterChart from './PowerAndWaterChart'
import ReservoirSensorsChart from './ReservoirSensorsChart'
import FeedingChart from './FeedingChart'
export default function DashBoard() {
  return (
    <>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={12} md={6}>
          <PowerAndWaterChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <ReservoirSensorsChart />
        </Grid>
        <Grid item xs={12}>
          <FeedingChart />
        </Grid>
      </Grid>
    </>
  )
}