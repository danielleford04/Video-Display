import React, { Component } from 'react';

class FeaturedInfo extends Component {
 renderFeaturedInfo(video) {
  if (video.is_new && video.product_type === "episode") {
      return <div className="video-featured-signifier">
        <div>New Episodes</div>
      </div>;
    } else if (video.is_new) {
      return <div className="video-featured-signifier">
        <div>New</div>
      </div>;
    } else if (video.product_type === "episode") {
      return <div className="video-featured-signifier">
        <div>Series</div>
      </div>;
    }
    };

  render() {
    return(
      <div>
        {this.renderFeaturedInfo(this.props.video)}
      </div>
    );
  }
}

export default FeaturedInfo;
