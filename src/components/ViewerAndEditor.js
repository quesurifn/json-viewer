import React from 'react'
import ReactModal from 'react-modal'

import Editor from './Editor'
import Viewer from './Viewer'

import 'react-dropdown/style.css'


class ViewerAndEditor extends React.PureComponent  {
    constructor() {
        super()

        this.state = {
          json: '[{"hello":"world"}]',
          showModal: false
      }

      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }

    render() {
        const  { json } = this.state
        return (
            <div className="flex-container">
            <div className="row">
              <div className="col-md-6">
                <Editor value={this.state.json} handleEditorChange={(_ev, changedJson) => this.setState({json: changedJson}) }/>
              </div>
              <div className="col-md-6">
                <div className="vertical-container-500">
                  <Viewer json={json} />
                </div>
              </div>
              <div className="col-md-12">
                <button onClick={this.handleOpenModal}>Get RESTful JSON</button>
              </div>
            </div>
            <ReactModal isOpen={this.state.showModal} contentLabel="Request JSON">
              
              <button onClick={this.handleCloseModal}>Close Modal</button>
            </ReactModal>
          </div>
        )
    }
}

export default ViewerAndEditor;