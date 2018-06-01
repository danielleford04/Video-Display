import React, { Component } from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import Footer from '../components/footer';
import { connect } from 'react-redux';
import { fetchVideos } from '../actions';
import VideoListItem from '../components/video_list_item';

class App extends Component {
  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    return (
      <div>
        <Header termInfo={ this.props.videoList.term }/>
        <Hero videoList={ this.props.videoList.titles }/>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    videoList: state.videos
  }
}

export default connect (mapStateToProps, { fetchVideos })(App)
