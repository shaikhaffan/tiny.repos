import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class RenderList extends Component {
	
	//Define The Constructor	
		constructor(props){
			super(props);
					

		}
	
		
	
  render() {
console.log(this.props.val);
    return (
				<tr>
				<td>{this.props.val.name}</td>
				<td>{this.props.val.total}</td>
				</tr>
			);
  }
}

export default RenderList;
