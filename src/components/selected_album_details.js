import React, { Component } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

const SelectedAlbumDetails = ({album}) => {
  if (!album) {
    return <div className="select-an-album">Please select an album from the grid</div>
  }

  return (
    <div className="selected-album-details">
      <div className="col-md-7 text-details">
        <ReactCSSTransitionReplace transitionName="fade-wait"
                                     transitionLeaveTimeout={600} transitionenterTimeout={600}>
          <TextDetails key={album.title} album={album} />
        </ReactCSSTransitionReplace>
      </div>
      <div className="col-md-5 spotify">
        <ReactCSSTransitionReplace transitionName="fade-wait"
          transitionLeaveTimeout={875} transitionEnterTimeout={875}>

          <Spotify key={album.uri} album={album} />
        </ReactCSSTransitionReplace>
      </div>
    </div>
  )
}

// Testing out splitting this into separate components
const TextDetails = ({album}) => {
  return (
    <div>
      <div className="artist">{album.artist}</div>
      <hr />
      <div className="title">{album.title}</div>
    </div>
  )
}

const Spotify = ({album}) => {
  return (
    <iframe src={"https://open.spotify.com/embed?uri=" + album.uri} width="252" height="460" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  )
}




export default SelectedAlbumDetails;
