import React, { Component } from 'react';
import TopBar from '../components/top_bar';
import Navigation from '../components/navigation';
import HeaderImage from '../components/header_image';

class Header extends Component {
  render() {
    return(
      <div>
        <TopBar />
        <Navigation />
        <HeaderImage termInfo={ this.props.termInfo }/>
      </div>
    );
  }
}

export default Header;
