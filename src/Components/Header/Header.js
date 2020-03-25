import React, { Component } from 'react';


export default class Header extends Component {

  constructor(props) {
    super()
    this.props = props
    console.log(this.props)
  }


  render() {
    return (
<div className="header">
<nav>
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input type="text" name="search" value={this.props.search} onChange={this.props.inputChange}  required />
          <label className="label-icon" htmlFor="search"><i class="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
      </div>
    )
  }
}