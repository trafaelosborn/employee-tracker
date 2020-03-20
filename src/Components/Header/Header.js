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
    <div class="nav-wrapper">
      <form>
        <div class="input-field">
          <input type="text" name="search" value={this.props.search} onChange={this.props.inputChange}  required />
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
      </div>
    )
  }
}