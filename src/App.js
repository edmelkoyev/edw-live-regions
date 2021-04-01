
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

// import { LiveRegions } from './LiveRegions'
import { ProgressBar } from './ProgressBar'


function App() {
  return (
    <Box p={2} height="100vh" bgcolor="grey.50">
      
      <Typography variant="h1">A11y testing</Typography>

      <ProgressBar />

    </Box>
  )
}

export default App;
