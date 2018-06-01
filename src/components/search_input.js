import React, { Component } from 'react';

class SearchInput extends Component {
  render() {
    return(
      <div >
       <form className="navbar-form" role="search">
       <div className="input-group div-search-bar">
           <img className="search-icon" src="../../style/images/search-icon.png" height="30px" />
           <input type="text" className="form-control input-search-bar" />
       </div>
       </form>
       </div>
    );
  }
}

export default SearchInput;
