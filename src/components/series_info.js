import React, { Component } from 'react';

class SeriesInfo extends Component {
 renderSeriesInfo(video) {
  if (video.series && video.series.title) {
      return <div>
        <div className="div-series-title">{video.series.title}</div>
      </div>;
      }
    };

  render() {
    return(
      <div>
        {this.renderSeriesInfo(this.props.video)}
      </div>
    );
  }
}

export default SeriesInfo;
