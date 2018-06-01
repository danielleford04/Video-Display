import React, { Component } from 'react';
import SortBy from '../components/sort_by';
import VideoList from '../components/video_list';
import LoadMore from '../components/load_more';

class Hero extends Component {
  render() {
    return(
      <div>
        <SortBy />
        <VideoList videoList={ this.props.videoList }/>
        <LoadMore />
      </div>
    );
  }
}

export default Hero;
