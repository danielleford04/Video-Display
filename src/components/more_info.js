import React, { Component } from 'react';

class MoreInfo extends Component {

  render() {
    return(
      <div>
        <button type="button" className="btn btn-video-more-info">
          More
          <img src="../../style/images/down-arrow.png" alt="^" width="25px"/>
        </button>
      </div>
    );
  }
}

export default MoreInfo;
