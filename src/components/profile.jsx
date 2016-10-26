'use strict';

import userServices from '../services/userServices.js'
import NavLoggedIn from './nav-loggedIn.jsx';
import React, { PropTypes as T } from 'react';
import AuthService from '../utils/AuthService.jsx';
import Auth0Lock from '../../node_modules/auth0-lock';
import ProfileDisplay from './profileDisplay.jsx';
import Events from './events.jsx'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {info: {}, complete: false};
  }



  componentDidMount() {
    var self = this;
    userServices.findUser()
    .then(user => {
      self.setState({info: user, complete: true});
    })
  }


  render () {
    return (
      <div>
        <NavLoggedIn auth={this.props.auth} />
        <div className="row">
          <div className="col-md-4">
            <ProfileDisplay user={this.state.info} status={this.state.complete}/>
          </div>
          <div className="col-md-8">
            <Events />
          </div>
        </div>
      </div>
    )
  }
}

Profile.propTypes = {
  location: T.object,
  auth: T.instanceOf(AuthService)
};

module.exports = Profile;