import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class hoveranchor extends Component {
  constructor() {
    super();
    this.state = {
      ishover: false
    }
  }
  hover = () => {
    this.setState({
      ishover: true
    })

  }
  nohover = () => {
    this.setState({
      ishover: false
    })

  }
  render() {


    return (
      <div>
        {/* <a link={this.props.link} className={`nav-link ${this.props.type} ${this.state.ishover ? 'border-bottom border-4  border-success text-success' : ''}`} aria-current="page" onMouseOver={this.hover} onMouseOut={this.nohover} href='/'>{this.props.text}</a> */}
        <Link to={this.props.link} className={`nav-link ${this.props.type} ${this.state.ishover ? 'border-bottom border-4  border-success text-success' : ''}`} aria-current="page" onMouseOver={this.hover} onMouseOut={this.nohover}>{this.props.text}</Link>

      </div>

    )
  }
}
