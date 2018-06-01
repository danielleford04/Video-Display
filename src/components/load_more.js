import React, { Component } from 'react';

class LoadMore extends Component {
  render() {
    return(
      <div className="load-more-div">
        <button type="button" className="btn btn-gray btn-load-more">Load More</button>
        <button type="button" className="btn btn-gray btn-scroll-to-top">
          <img src="../../style/images/up-arrow.png" alt="^" width="25px"/>
        </button>
      </div>
    );
  }
}

export default LoadMore;
