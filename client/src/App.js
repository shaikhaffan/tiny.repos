import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import ReadFile from './Readfile';

class App extends Component {
	
	//Define The Constructor	
		constructor(props){
			super(props);		
			this.state = {
				number : '',
			}
		}
	
	// This Function is used add a number into database.
	addNumber = () =>{		
		axios.post('http://localhost:5000/addnumber', {
		number: this.state.number,
		}).then(function (response) {
			alert("Record Posted");
		}).catch(function (error) {
			console.log(error);
	  });
	}
	
  render() {
    return (
      <div className="App">         
		  <label>
			Enter a Number:
			<input onChange={event => this.setState({number:event.target.value})} placeholder="Insert a Number" type="number" name="number" />
		  </label>
		  <button  onClick={this.addNumber} name="submit" value="submit">Submit</button> 
			<div className="wrap">
			<ReadFile/>
			</div>
      </div>
    );
  }
}

export default App;
