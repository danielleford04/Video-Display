import React, { Component } from 'react';
import SearchInput from '../components/search_input';

class Navigation extends Component {
  render() {
    return(
      <div className="nav-div">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" href="#">MY GAIA</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">YOGA</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active-link" href="#">SEEKING TRUTH</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">TRANSFORMATION</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">FILMS & DOCS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">CENTERS</a>
          </li>
          <li>
            <SearchInput />
          </li>
        </ul>

      </div>
    );
  }
}

export default Navigation;
