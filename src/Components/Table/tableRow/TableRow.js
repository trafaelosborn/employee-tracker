import React from 'react';

const TableRow = (props) => {
        let persons = props.rowContent;
        var  personsKeys = {};
        if ( persons !== null ) {
            personsKeys = Object.keys(persons);
        }
     
        return (
            <tbody>
         { persons !== null ? personsKeys.map( function(person, index) {
             // console.log(props.rowContent[index].location.timezone);  
               return (
                <tr key={props.rowContent[index].name}>
                    <td></td>
                    <td>{persons[index].location.timezone}</td>
                    <td>Smith</td>
                    <td>50</td>
                </tr>
               )
         }) : '' }
               </tbody>
    );
}
export default TableRow;