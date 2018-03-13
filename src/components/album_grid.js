//for now, this is just a straight list of things

import React from 'react';
import AlbumCover from './album_cover';

const AlbumGrid = (props) => {
  const albumItems = props.albums.map((album) => {
    return (
      <AlbumCover
        album={album}
        onAlbumSelect={props.onAlbumSelect}
        key={album.title} />
    )
  })

  return (
    <ul className="wrapper">
      {albumItems}
    </ul>
  );
};

export default AlbumGrid;
