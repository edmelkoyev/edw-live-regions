
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import RegularSelect from './RegularSelect'
import MaterialSelect from './MaterialSelect'
import MaterialNativeSelect from './MaterialNativeSelect'

function LiveRegions() {
  return (
    <Box>
      
      <Typography variant="h2">Live Regions testing</Typography>

      <Box p={6}>
        <Typography variant="h3">RegularSelect</Typography>
        <Paper>
          <RegularSelect />
        </Paper>
      </Box>

      <Box p={6}>
        <Typography variant="h3">MaterialSelect</Typography>
        <Paper>
          <MaterialSelect />
        </Paper>
      </Box>

      <Box p={6}>
        <Typography variant="h3">MaterialNativeSelect</Typography>
        <Paper>
          <MaterialNativeSelect />
        </Paper>
      </Box>

    </Box>
  )
}

export default LiveRegions
