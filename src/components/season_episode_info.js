import React, { Component } from 'react';

class SeasonEpisodeInfo extends Component {
 renderEpisodeInfo(video) {
  if (video.fields.season && video.fields.season[0].value && video.fields.episode && video.fields.episode[0].value) {
      return <div>
        <div>Season {video.fields.season[0].value}, Episode {video.fields.episode[0].value}</div>
      </div>;
      }
    };

  render() {
    return(
      <div>
        {this.renderEpisodeInfo(this.props.video)}
      </div>
    );
  }
}

export default SeasonEpisodeInfo;
