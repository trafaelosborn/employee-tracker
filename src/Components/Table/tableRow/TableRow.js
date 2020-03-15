import React from 'react';
import axios from "axios";

class TableRow extends React.Component {
    // Axios get with setState example and state not declared
     componentDidMount() {
      axios.get(`https://randomuser.me/api/?results=200&nat=us`)
        .then(res => {
          const persons  = res.data.results;
          this.setState(persons);
        })
    }
   render() {
       console.log(this.state)
     return (
       <div>
        <table>
           <tbody>
           <tr id="top-row">
            <td>Name</td>
            <td>Possible Whereabouts</td>
            <td>Favorite College Football Team</td>
            <td>Double Secret Passcode</td>
            </tr>  
           { this.state !== null ? Object.keys(this.state).map( (index, person) => {
                 return (
                    <React.Fragment>
                
                <tr>
                  <td>{this.state[index].name.title + " " + this.state[index].name.last}</td>
                  <td>{this.state[index].location.timezone.description}</td>
                  <td>{this.state[index].location.state}</td>
                  <td>{this.state[index].location.postcode}</td>
                </tr>
                </React.Fragment>
              );
           }) : ''}
         </tbody>
        </table>
       </div>
     );
     }
   }

export default TableRow