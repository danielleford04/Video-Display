import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
    return(
      <div className="user-info">
        <span> Username </span>
        <img src="../../style/images/usericon.png" alt="Gaia" height="35"/>
      </div>
    );
  }
}

export default UserInfo;
