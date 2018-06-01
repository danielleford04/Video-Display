import React, { Component } from 'react';

class SortBy extends Component {
  render() {
    return(
      <div className="sort-by-div">
        <div className="form-group select-container">
         <label for="exampleFormControlSelect1">Sort by:</label>
         <select className="form-control" id="exampleFormControlSelect1">
           <option>Recommended</option>
           <option>Recent</option>
         </select>
        </div>
      </div>
    );
  }
}

export default SortBy;
