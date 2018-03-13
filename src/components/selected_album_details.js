import React, { Component } from 'react';

const SelectedAlbumDetails = ({album}) => {
  if (!album) {
    return <div className="select-an-album">Please select an album from the grid</div>
  }

  return (
    <div className="selected-album-details">
      <div className="col-md-7 text-details">
        <div className="artist">{album.artist}</div>
        <hr/>
        <div className="title">{album.title}</div>
      </div>
      <div className="col-md-5 spotify">
        <iframe src={"https://open.spotify.com/embed?uri=" + album.uri} width="252" height="460" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      {/* <img src={album.cover_url} className="selected-album-cover"/> */}
    </div>
  )
}

export default SelectedAlbumDetails;
