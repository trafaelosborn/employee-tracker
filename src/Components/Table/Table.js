import React from 'react';
import axios from "axios";
import Header from "../../Components/Header/Header"
class Table extends React.Component {

  state = {
    search: "",
    employees: [],
    originalEmployees: []
  }
  // Axios get with setState example and state not declared
  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=200&nat=us`)
      .then(res => {
        const persons = res.data.results;
        this.setState({
          employees: persons,
          originalEmployees: persons
        });
      })
  }

  handleOnChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value

    })
    console.log(value)
    if (this.state.search.length > 0) {
      let newEmployees = this.state.employees.filter(person => {
        return person.name.last.indexOf(this.state.search) > -1 || person.name.first.indexOf(this.state.search) > -1


      })

      this.setState({
        employees: newEmployees
      })
    }
    else {
      this.setState({
        employees : this.state.originalEmployees
      }) 
    }
  }

  render() {
    console.log(this.state.employees)
    return (
      <div>
        <Header search={this.state.search} inputChange={this.handleOnChange} />
        <table>
          <tbody>
            <tr id="top-row">
              <td>Name</td>
              <td>Possible Whereabouts</td>
              <td>Favorite College Football Team</td>
              <td>Double Secret Passcode</td>
              </tr>
          {this.state.employees.map( (person, index ) => {
            return (
              <tr key={index}>
                    <td>{person.name.title + " " + person.name.last}</td>
                    <td>{person.location.timezone.description}</td>
                    <td>{person.location.state}</td>
                    <td>{person.location.postcode}</td>
                </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table