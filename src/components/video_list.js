import React, { Component } from 'react';
import VideoListItem from '../components/video_list_item';

export default class VideoList extends Component {
  render() {
    return(
      <div>
          <ul className="list-group">
            <VideoListItem videoList={ this.props.videoList } />
          </ul>
      </div>
    );
  }
}
