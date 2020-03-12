import React, { Component } from 'react';
import "../Table/Table.css"
import axios from "axios";

class Table extends Component { 

    // constructor(props) {
    //     super(props);
    //     this.state = { 
          
    //     };
    //   }
    
      componentDidMount(){
        axios.get('https://randomuser.me/api/?results=200&nat=us')
              .then(res => {
            const response  = res.data;
            this.setState({ response });
          })
        .catch(error =>{
        console.log(error);
        })
        };

  render() {
    console.log(this.state)
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
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  
</table>
</div>
    )
  }
}



export default Table