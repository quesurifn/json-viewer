import React, { PureComponent } from 'react'
import ReactJson from 'react-json-view'

class Viewer extends PureComponent {

    render() {
        let json = this.props.json.replace(/\\"/, "").replace("\n", "").replace(/^\s+|\s+$|\s+(?=\s)/g, "")
        try {
            json = JSON.parse(json)
        } catch(e) { /* Do Nothing */}
        return  <ReactJson src={json} />
    }
}
export default Viewer;