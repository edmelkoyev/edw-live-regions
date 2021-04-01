

import React, { PureComponent } from 'react'
import Box from '@material-ui/core/Box'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Paper from '@material-ui/core/Paper'
import Select from '@material-ui/core/Select'

const sections = [
    {id: 'sec01', title: "Anatomy", message: "11 activities"},
    {id: 'sec02', title: "Chemistry", message: "25 activities"},
    {id: 'sec03', title: "Physics", message: "38 activities"}
]

class MaterialSelect extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { curSection: 'sec01' }

        this.handleSectionChanage = this.handleSectionChanage.bind(this)
    }
  
    handleSectionChanage({ target: { value } }) {
        this.setState({
            curSection: value
        })
    }

    getMessage = curID => {
        const section = sections.find(item => item.id === curID)
        return section.message
    }
  
    render() {
        const {curSection} = this.state

        return (
            <Paper>
                <Box p={2}>
                    <Box pb={2}>
                        <FormControl variant="filled">
                            <InputLabel id="demo-simple-select-filled-label">Sections</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={curSection}
                                onChange={this.handleSectionChanage}
                            >
                            {sections.map(({id, title}) =>
                                <MenuItem key={id} value={id}>{title}</MenuItem>
                            )}
                            </Select>
                        </FormControl>
                    </Box>

                    <Paper>
                        <Box p={2}>
                            <Box>Lorem ipsum dolor sit amet</Box>
                            <Box id="msg01" aria-live="polite">
                                {'MESSAGE: ' + this.getMessage(curSection) }
                            </Box>
                        </Box>
                    </Paper>
                
                </Box>
            </Paper>
        )
    }
  }
  
  export default MaterialSelect