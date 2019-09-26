import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Dropdown from 'react-dropdown';
import axios from 'axios';
import Editor from './Editor';


import 'react-dropdown/style.css';


class RequestUX extends React.PureComponent {
    constructor() {
        super()
        this.options = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];
        this.state = {
            method: '',
            headers: [],
            fields: [{key: null, value: null}]
        }
        this.handleChange = this.handleChange.bind(this);
    }

    _onSelect (option) {
        console.log('You selected ', option.label)
        this.setState({selected: option})
      }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    handleInputChange(i, event, mode) {
        const fields = this.state.fields
        const values = [...fields];

        if(mode === "key") {
            values[i].key = event.target.value;
        } else {
            values[i].value = event.target.value;
        }

        this.setState({fields: values})
    }
    
    handleInputAdd() {
        const fields = this.state.fields
        const values = [...fields];
        values.push({ key: null, value: null });
        this.setState({fields: values})
    }
    
    handleInputRemove(i) {
        const fields = this.state.fields
        const values = [...fields];
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
                                    <div key={`${field}-${idx}`}>
                                        <input type="text" placeholder="Header Key"  onChange={e => this.handleInputChange(idx, e, "key")}/>
                                        <input type="text" placeholder="Header Value"  onChange={e => this.handleInputChange(idx, e, "value")}/>
                                        <button type="button" onClick={() => this.handleInputRemove(idx)}>
                                            X
                                        </button>
                                    </div>
                                );
                            })}
                    </TabPanel>
                        
                    <TabPanel>
       
                    </TabPanel>
                </Tabs>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default RequestUX;