import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import RenderList from './renderlist';

class ReadFile extends Component {
	
	//Define The Constructor	
		constructor(props){
			super(props);
			this.state = {
			data : '',
			}			

		}
		filterRecords = (data) => {
			var getSplitedDate = this.splitByWords(data);
			console.log(getSplitedDate);
			var wordMap = this.createWordMap(getSplitedDate);
			//console.log(wordMap);
			var sortWord = this.sortByCount(wordMap);
			this.setState({data : sortWord });			
			//console.log(this.state.data);
		}
		
		splitByWords = (data) =>{	
			 var wordsArray = data.split(/\s+/);
			 return wordsArray;		
		}

		
		createWordMap = (wordsArray) =>{
		  // create map for word counts
		  var wordsMap = {};
		  wordsArray.forEach(function (key) {
			  
			if (wordsMap.hasOwnProperty(key)) {
				//console.log(key);
				wordsMap[key]++;
			} else {
			  wordsMap[key] = 1;
			}
		  });

		  return wordsMap;

		}
		
		sortByCount = (wordsMap) => {
		  // sort by count in descending order
		  var finalWordsArray = [];
		  finalWordsArray = Object.keys(wordsMap).map(function (key) {
			return {
			  name: key,
			  total: wordsMap[key]
			};
		  });

		  finalWordsArray.sort(function (a, b) {
			//  console.log(a +"=" + b);
			return b.total - a.total;
		  });

		  return finalWordsArray;

}
		
		getRecord = () =>{	
			//var self=this;
			axios.get('http://terriblytinytales.com/test.txt')
			   .then( (response) => {
                this.filterRecords(response.data);
            })
            .catch( (error) => {
                console.log(error);
            });
			  
			//  console.log("asd");
		}
		
		renderHtml = () => {	
		 let notes = this.state.data.map((val,key) =>{
		 return <RenderList key={key} keyval={key} val={val}
				/> 
				});
			return notes;
		}
		
		
	
  render() {
	console.log(this.state.data);
    return (
   
			<div className="wrap">
				<h1>Records for Words</h1>
				<button  onClick={this.getRecord} name="getrecords">Get Records</button>
				<div className = 'tableclass'>
				<table>
					<tbody>
					<tr><th>Word</th><th>Count</th></tr>
					{(this.state.data == "")? 'No Records Available!' : this.renderHtml()}
					</tbody>
				</table>
				
				</div>
					
			</div>
    );
  }
}

export default ReadFile;
