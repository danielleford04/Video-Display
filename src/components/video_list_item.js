import React, { Component } from 'react';
import FeaturedInfo from '../components/featured';
import SeasonEpisodeInfo from '../components/season_episode_info';
import SeriesInfo from '../components/series_info';
import LengthInfo from '../components/length_info';
import MoreInfo from '../components/more_info';
import _ from 'lodash';

class VideoListItem extends Component {
renderList() {
  return _.map(this.props.videoList,video => {
    if (video.hero_image_notext && video.hero_image_notext.hero_320x200) {
      return (
        <li className="col-md-3 list-group-item video-list-item" key={video.nid}>
          <div className="video-list">

            <div className="video-thumbnail-container">
              <img className="thumbnail" src={video.hero_image_notext.hero_320x200}/>
              <FeaturedInfo video= { video }/>
            </div>
            <div className="div-video-item-info">
              <SeriesInfo video= { video }/>
              <div>
                <h6>{video.title}</h6>
              </div>

            <SeasonEpisodeInfo video= { video }/>
            <LengthInfo video= { video }/>
            <div className="div-video-likes">
              <div><img src="../../style/images/thumbs-up.png" alt="Liked:" height="15"/> {video.fivestar.up_count.value}</div>
            </div>
            </div>

          </div>
          <MoreInfo />
        </li>
      );
    }
  })
}

render() {
  return(
    <div>
        {this.renderList()}
    </div>
  );
}
}

export default VideoListItem;
