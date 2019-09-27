import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios';
import Editor from './Editor';

import 'react-dropdown/style.css';
import "react-tabs/style/react-tabs.css";

class RequestUX extends React.PureComponent {
    constructor() {
        super()
        this.options = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

        this.state = {
            method: '',
            headers: [{key: null, value: null}],
            body: '',
            error: false,
            response: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputAdd = this.handleInputAdd.bind(this);
        this._onSelect = this._onSelect.bind(this);

    }


    async handleSubmit(event) {
        event.preventDefault();
        let response = null;
        const {method, url, headers, body} = this.state

        // Flatten / format header for Axios
        const parsedHeaders = {}
        for (let header in headers) {
            parsedHeaders[header.key] = header.value;
        }
        // Add this for methods that are not GET because we expect a body
        if(method !== "GET") {
            parsedHeaders['Content-Type'] = "application/json"
        }
        
        const axiosConfig = { url, method, headers: parsedHeaders, data: body }
        try {
            response = await axios(axiosConfig)
            this.props.updateParent({response})
        } catch(error) {
            this.setState({error})
        }


    }

    _onSelect (option) {
        this.setState({method: option.target.options[option.target.selectedIndex].text, error: false})
      }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value, error: false});
    }
    
    handleInputChange(i, event, mode) {
        const headers = this.state.headers
        const values = [...headers];

        if(mode === "key") {
            values[i].key = event.target.value;
        } else {
            values[i].value = event.target.value;
        }
        this.setState({headers: values, error: false})
    }
    
    handleInputAdd() {
        const headers = this.state.headers
        const values = [...headers];
        values.push({ key: null, value: null });
        this.setState({headers: values})
    }
    
    handleInputRemove(i) {
        const headers = this.state.headers
        const values = [...headers];
        values.splice(i, 1);
        this.setState({headers: values})
    }

    render() {
        const { headers, body, error } = this.state 
        return (
                <form onSubmit={this.handleSubmit}>
                    {error && error instanceof Error &&
                    <div className="alert alert-danger"> 
                        <p>{error.message}</p>
                    </div>
                    }
                    <h1>Request JSON</h1>
                    <label><b>HTTP Method and URI</b></label>
                    <div className="form-inline">
                        <select className="form-control" onChange={this._onSelect}> 
                                {this.options.map((e, idx) => {
                                    if(idx === 0) {
                                        return <option key={idx} defaultValue>{e}</option>
                                    } else {
                                        return <option key={idx}>{e}</option>
                                    }
                                })}
                        </select>
                        <input className="form-control"  onChange={this.handleChange} name="url" type="url" required placeholder="Enter URL here"/>
                    </div>
                
                    <Tabs>
                        <TabList>
                            <Tab>Headers</Tab>
                            <Tab>Body</Tab>
                        </TabList>
                    
                        <TabPanel>
                                {headers.map((field, idx) => {
                                    return (
                                            <div key={`${field}-${idx}`} className="form-inline">
                                                <input className="form-control" type="text" placeholder="Header Key"  onChange={e => this.handleInputChange(idx, e, "key")}/>
                                                <input className="form-control" type="text" placeholder="Header Value"  onChange={e => this.handleInputChange(idx, e, "value")}/>
                                                <button className="btn btn-dark"  type="button" onClick={() => this.handleInputRemove(idx)}>-</button>
                                            </div>
                                    );
                                })}
                                <small style={{display: "block"}}>* Content-Type: application/json is included by default and cannot be changed</small>
                                <button type="button" className="btn btn-dark margin-v" onClick={() => this.handleInputAdd()}>+ header</button>
                        </TabPanel>
                        <TabPanel>
                            <Editor value={body} handleEditorChange={(_ev, changedJson) => this.setState({body: changedJson})} />
                        </TabPanel>
                    </Tabs>
                    <div className="form-inline">   
                        <button className="btn btn-dark margin-l" type="submit">Submit</button>
                        <a style={{color: "white"}} className="btn btn-dark margin-l" onClick={this.props.modalClose}>Close Modal</a>
                    </div>
                </form>
    
        )
    }
}
export default RequestUX;