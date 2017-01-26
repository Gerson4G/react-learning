import React from 'react'
import {Router, Route, Link} from 'react-router';

class Buttons extends React.Component {
  render() {

    return (
      <li className="">
      	<Link to={`/${this.props.name}`}>{this.props.name}</Link>
      </li>
    );
  }
}

export default Buttons