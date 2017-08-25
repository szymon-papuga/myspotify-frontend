import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../css/AudioPlayer.css';
import  { findLink } from '../mappingUtils';

function AudioPlayer({ songUrl }) {
    return (
        <ReactAudioPlayer src={songUrl} controls autoPlay className="audio"/>
    );
};

AudioPlayer.propTypes = {
  songUrl: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
    return {
        songUrl: findLink(state.songs.selectedItem.links, 'audio')
    };
};

export default connect(mapStateToProps)(AudioPlayer);
