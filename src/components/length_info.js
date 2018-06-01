import React, { Component } from 'react';

class LengthInfo extends Component {
 renderLengthInfo(video) {
  if (video.preview && video.preview.duration) {
      return <div>
        <div>{video.preview.duration} minutes</div>
      </div>;
      }
    };

  render() {
    return(
      <div>
        {this.renderLengthInfo(this.props.video)}
      </div>
    );
  }
}

export default LengthInfo;
