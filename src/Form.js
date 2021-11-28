import React, {useState} from 'react';
import Title from './Components/Title';
import { InputGroup, FormControl, Button } from 'react-bootstrap';


class NameForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      //alert('A name was submitted: ' + this.state.value);
      //console.log(this.state.value);
      
      // Output current text from input element
      document.getElementById('show').innerHTML = (this.state.value) + '!';
      event.preventDefault();
      
      // Reset text in form after submit
      this.setState({
        value: ''
      });
    }
  
    render() {
      return (
        <div>
          <Title title_page="This is changer on click"/>

          <h2>Hello <span id="show"></span></h2> 
          <form onSubmit={this.handleSubmit}>
               <label>
                 <p>What is your name?</p>
                </label> <br />
              <InputGroup size="md" className="mb-3">
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" type="text" value={this.state.value} onChange={this.handleChange} />
              </InputGroup>
            <br />
            <Button variant="primary" size="lg" type="submit" value="Submit" >Submit</Button>
            
        </form>
        </div>
        
      );
    }
  }

export default NameForm;