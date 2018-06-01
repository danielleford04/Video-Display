import React, { Component } from 'react';
import UserInfo from '../components/user_info';

class TopBar extends Component {
  render() {
    return(
      <div className="top_bar">
        <img src="../../style/images/logo.png" alt="Gaia" />
        <UserInfo />
      </div>
    );
  }
}

export default TopBar;
