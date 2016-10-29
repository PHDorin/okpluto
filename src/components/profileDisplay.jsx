"use strict";


var React = require('react');
//var UsersPage = require('./usersPage.jsx');
var Profile = require('./profile.jsx')
import { hashHistory } from 'react-router';
import Loading from './loading.jsx'
import UserDisplay from './user.jsx'

class ProfileDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile-image">
        <img src={this.props.userInfo.picLink || this.props.userInfo.profilepic} alt="Pic"/>
      </div>
    )
  }
}

module.exports = ProfileDisplay;