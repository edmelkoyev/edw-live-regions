

import React, { PureComponent } from 'react'

const sections = [
    {id: 'sec01', title: "Anatomy", message: "11 activities"},
    {id: 'sec02', title: "Chemistry", message: "25 activities"},
    {id: 'sec03', title: "Physics", message: "38 activities"}
]

class RegularSelect extends PureComponent {
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
        <div>
            <select value={curSection} onChange={this.handleSectionChanage}>
                {sections.map(({id, title}) =>
                    <option key={id} value={id}>{title}</option>
                )}
            </select>
            <div>Lorem ipsum dolor sit amet</div>
            <div id="msg01" aria-live="polite">
                {'MESSAGE: ' + this.getMessage(curSection) }
            </div>
        </div>
        );
    }
  }
  
  export default RegularSelect