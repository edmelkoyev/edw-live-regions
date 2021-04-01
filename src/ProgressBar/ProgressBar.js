

import React, { PureComponent } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'

import Loop from '@material-ui/icons/Loop'

class ProgressBar extends PureComponent {

    constructor(props) {
        super(props)
        this.state = { progress: false }

        this.handleProgress = this.handleProgress.bind(this)
    }
  
    handleProgress() {
        const { progress: curProgress } = this.state
        this.setState({
            progress: !curProgress
        })
    }

    render() {
        const {progress} = this.state

        return (
            <Box>
                <Box p={2}>
                    <Typography variant="h3">Progressbar</Typography>
                </Box>
                <Box p={2}>
                    <Paper>
                        <Box p={2}>
                            <Button variant="outlined" onClick={this.handleProgress}>{progress ? 'Stop' : 'Start'}</Button>
                        </Box>
                        <Box display="flex">
                            <Box p={2} aria-live="polite">
                                <Typography>Option A: status</Typography>
                                {progress &&
                                    <Box role="status"
                                    >
                                        <Loop />
                                    </Box>
                                }
                                {!progress && 
                                    <Button variant="outlined" onClick={this.handleProgress}>{progress ? 'Stop' : 'Start'}</Button>
                                }
                            </Box>
                            <Box p={2} aria-live="polite">
                                <Typography>Option B: progressbar</Typography>
                                {progress &&
                                    <Box role="progressbar">
                                        <Loop />
                                    </Box>
                                }
                                {!progress && 
                                    <Button variant="outlined" onClick={this.handleProgress}>{progress ? 'Stop' : 'Start'}</Button>
                                }
                            </Box>
                            <Box p={2} aria-live="polite">
                                <Typography>Option C: progressbar, aria-label</Typography>
                                {progress &&
                                    <Box role="progressbar"
                                        aria-label="Syncrinization is in progress"
                                    >
                                        <Loop />
                                    </Box>
                                }
                                {!progress && 
                                    <Button variant="outlined" onClick={this.handleProgress}>{progress ? 'Stop' : 'Start'}</Button>
                                }
                            </Box>
                        </Box>
                    </Paper>
                </Box>

                <Box p={2}>
                    <Paper>
                        <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Student name</TableCell>
                                    <TableCell align="right">Score</TableCell>
                                    <TableCell align="right">Aria approach</TableCell>
                                    <TableCell align="right">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">Jessica Norton 1</TableCell>
                                    <TableCell align="right">1</TableCell>
                                    <TableCell align="right">progressbar</TableCell>
                                    <TableCell align="right">
                                        <Box aria-live="polite">
                                            {progress &&
                                                <Box role="progressbar">
                                                    <Loop />
                                                </Box>
                                            }
                                            {!progress && 
                                                <Button variant="outlined" onClick={this.handleProgress}>{progress ? 'Stop' : 'Start'}</Button>
                                            }
                                        </Box>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Jessica Norton 2</TableCell>
                                    <TableCell align="right">1</TableCell>
                                    <TableCell align="right">progressbar, aria-busy</TableCell>
                                    <TableCell align="right">
                                        <Box aria-live="polite" aria-busy="true">
                                            {progress &&
                                                <Box role="progressbar">
                                                    <Loop />
                                                </Box>
                                            }
                                            {!progress && 
                                                <Button variant="outlined" onClick={this.handleProgress}>{progress ? 'Stop' : 'Start'}</Button>
                                            }
                                        </Box>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Jessica Norton 3</TableCell>
                                    <TableCell align="right">1</TableCell>
                                    <TableCell align="right">progressbar, aria-busy, aria-label</TableCell>
                                    <TableCell align="right">
                                        <Box aria-live="polite">
                                            {progress &&
                                                <Box
                                                    role="progressbar"
                                                    aria-busy="true"
                                                    aria-label="Syncrinization is in progress"
                                                >
                                                    <Loop />
                                                </Box>
                                            }
                                            {!progress && 
                                                <Button variant="outlined" onClick={this.handleProgress}>{progress ? 'Stop' : 'Start'}</Button>
                                            }
                                        </Box>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" id="std0123">Jessica Norton 4</TableCell>
                                    <TableCell align="right">1</TableCell>
                                    <TableCell align="right">progressbar, aria-busy, aria-labeledby</TableCell>
                                    <TableCell align="right">
                                        <Box aria-live="polite">
                                            {progress &&
                                                <Box
                                                    role="progressbar"
                                                    aria-busy="true"
                                                    aria-labelledby="std0123"
                                                >
                                                    <Loop />
                                                </Box>
                                            }
                                            {!progress && 
                                                <Button variant="outlined" onClick={this.handleProgress}>{progress ? 'Stop' : 'Start'}</Button>
                                            }
                                        </Box>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" id="std0123">Jessica Norton 5</TableCell>
                                    <TableCell align="right">1</TableCell>
                                    <TableCell align="right">progressbar, aria-busy, aria-labeledby, srOnly</TableCell>
                                    <TableCell align="right">
                                        <Box aria-live="polite">
                                            {progress &&
                                                <Box
                                                    role="progressbar"
                                                    aria-busy="true"
                                                    aria-labelledby="std0123"
                                                >
                                                    <Loop title="Lorem ipsum" />
                                                    <Typography id="sty12345" variant="srOnly">Syncrinization is in progress</Typography>
                                                </Box>
                                            }
                                            {!progress && 
                                                <Button variant="outlined" onClick={this.handleProgress}>{progress ? 'Stop' : 'Start'}</Button>
                                            }
                                        </Box>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Nickolas Pearson</TableCell>
                                    <TableCell align="right">0.4</TableCell>
                                    <TableCell align="right">status</TableCell>
                                    <TableCell align="right">
                                        <Box aria-live="polite">
                                            {progress &&
                                                <Box
                                                    role="status"
                                                >
                                                    <Loop />
                                                </Box>
                                            }
                                            {!progress && 
                                                <Button variant="outlined" onClick={this.handleProgress}>{progress ? 'Stop' : 'Start'}</Button>
                                            }
                                        </Box>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Nickolas Pearson</TableCell>
                                    <TableCell align="right">0.4</TableCell>
                                    <TableCell align="right">status, aria-busy</TableCell>
                                    <TableCell align="right">
                                        <Box aria-live="polite">
                                            {progress &&
                                                <Box
                                                    role="status"
                                                    aria-busy="true"
                                                >
                                                    <Loop />
                                                </Box>
                                            }
                                            {!progress && 
                                                <Button variant="outlined" onClick={this.handleProgress}>{progress ? 'Stop' : 'Start'}</Button>
                                            }
                                        </Box>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Nickolas Pearson</TableCell>
                                    <TableCell align="right">0.4</TableCell>
                                    <TableCell align="right">status, aria-busy, aria-label</TableCell>
                                    <TableCell align="right">
                                        <Box aria-live="polite">
                                            {progress &&
                                                <Box
                                                    role="status"
                                                    aria-busy="true"
                                                    aria-label="Syncrinization is in progress"
                                                >
                                                    <Loop />
                                                </Box>
                                            }
                                            {!progress && 
                                                <Button variant="outlined" onClick={this.handleProgress}>{progress ? 'Stop' : 'Start'}</Button>
                                            }
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        </TableContainer>
                        
                    </Paper>
                </Box>
            </Box>
        )
    }
  }
  
  export default ProgressBar