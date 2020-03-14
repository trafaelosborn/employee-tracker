import React, { Component } from 'react';
import "../Table/Table.css"
import axios from "axios";
import TableRow from './tableRow/TableRow';

class Table extends Component { 
    
    
      componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=200&nat=us`)
          .then(res => {
            const persons  = res.data.results;
            this.setState(persons); 
          })
      } 

  render() {
    const persons = this.state;
    if ( persons !== null ) {
      let personsKeys = Object.keys(persons);
      personsKeys.map(function( index, person){
        console.log(persons[index].location.timezone)       
      })
    }
    

    
    return (
      
      
        <div>
        <h1>Who are these people?</h1>
        <table>
  <tr>
    <th>Image</th>
    <th>Name</th>
    <th>Possible Whereabouts</th>
    <th>Age</th>
    <th>Favorite College Football Team</th>
  </tr>
  <TableRow rowContent={this.state} />
</table>
</div>

    )
  }
}


export default Table;