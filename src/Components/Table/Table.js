import React, { Component } from 'react';
import "../Table/Table.css"
import TableRow from './tableRow/TableRow';

import Header from "../Header/Header";

class Table extends Component { 
    
    


render(){
  return(
    
   
    
    <div>
      <Header />
      <h1>Who are these people?</h1>
      <table>
        
        <TableRow />
      </table>
    </div>
  )
}



}


export default Table;