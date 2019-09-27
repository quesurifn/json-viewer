import React from 'react'
import ReactModal from 'react-modal'

import Editor from './Editor'
import Viewer from './Viewer'
import RequestUX from './RequestUX'

import 'react-dropdown/style.css'

ReactModal.setAppElement("#root")
class ViewerAndEditor extends React.Component  {
    constructor() {
        super()

        this.state = {
          json: '[{"hello":"world"}]',
          error: false, 
          showModal: false
      }

      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.updateFromChild = this.updateFromChild.bind(this);
    }

    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }

    updateFromChild (resp) {
      let { response } = resp
      if(typeof response.data === 'object') {
        this.setState({json: JSON.stringify(response.data)})
        this.handleCloseModal()
      } else if(response instanceof Error) {
        this.setState({error: response})
      } else {
      }
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
                <button className="btn btn-dark" onClick={this.handleOpenModal}>Get RESTful JSON</button>
              </div>
            </div>
            <ReactModal isOpen={this.state.showModal} contentLabel="Request JSON">
              <RequestUX  updateParent={this.updateFromChild} modalClose={this.handleCloseModal}/>
            </ReactModal>
    
          </div>
        )
    }
}



export default ViewerAndEditor;