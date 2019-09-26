import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Dropdown from 'react-dropdown';
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
        event.preventDefault()
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
            this.setState({response})
        } catch(error) {
            this.setState({error})
        }
    }

    _onSelect (option) {
        console.log('You selected ', option.label)
        this.setState({selected: option})
      }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleInputChange(i, event, mode) {
        const headers = this.state.headers
        const values = [...headers];

        if(mode === "key") {
            values[i].key = event.target.value;
        } else {
            values[i].value = event.target.value;
        }

        this.setState({fields: values})
    }
    
    handleInputAdd() {
        const headers = this.state.headers
        const values = [...headers];
        values.push({ key: null, value: null });
        this.setState({fields: values})
    }
    
    handleInputRemove(i) {
        const headers = this.state.headers
        const values = [...headers];
        values.splice(i, 1);
        this.setState({fields: values})
    }

    render() {
        const fields = this.state.fields
        return (
            <form onSubmit={this.handleSubmit}>
                <Dropdown options={this.options} onChange={this._onSelect} value={this.options[0]} placeholder="Select a method" />
                <input onChange={this.handleChange} name="url" type="url" required />
                <Tabs>
                    <TabList>
                        <Tab>Headers</Tab>
                        <Tab>Body</Tab>
                    </TabList>
                  
                    <TabPanel>
                        <button type="button" onClick={() => this.handleAdd()}>+</button>
                            {fields.map((field, idx) => {
                                return (
                                    <div key={`${field}-${idx}`} className="inline-form">
                                        <input type="text" placeholder="Header Key"  onChange={e => this.handleInputChange(idx, e, "key")}/>
                                        <input type="text" placeholder="Header Value"  onChange={e => this.handleInputChange(idx, e, "value")}/>
                                        <button type="button" onClick={() => this.handleInputRemove(idx)}>
                                            x
                                        </button>
                                    </div>
                                );
                            })}
                    </TabPanel>
                    
                    <TabPanel>
                        <Editor handleEditorChange={(_ev, changedJson) => this.setState({body: changedJson})} />
                    </TabPanel>
                </Tabs>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default RequestUX;