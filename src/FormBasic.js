import React, { Component } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import Title from './Components/Title'


export class FormBasic extends Component {

    //set inital state
    state = {
        input: "",
    };

    // set handleChange for change value from Input
    handleChange = event => {
        const value = event.target.value;
        this.setState({
            input: value
        });
    };

    render() {
        return (
            <div className="realtime-block">
                <div className="items">
                    <Title title_page="This is a realtime writing"/>
                    <h2>Hello {this.state.input}!</h2>
                    <h4>It's nice to meet you.</h4>
                    <form>
                        <InputGroup size="lg" className="mb-3">
                            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={this.state.input} onChange={this.handleChange} placeholder="Tap your name"/>
                        </InputGroup>
                    </form>
                </div>
            </div>
        )
    }
}

export default FormBasic
