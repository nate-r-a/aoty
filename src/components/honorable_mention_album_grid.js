import React from 'react';
import HonorableMentionAlbumCover from './honorable_mention_album_cover';

const HonorableMentionAlbumGrid = (props) => {
  const albumItems = props.albums.map((album) => {
    return (
      <HonorableMentionAlbumCover
        album={album}
        onAlbumSelect={props.onAlbumSelect}
        key={album.title} />
    )
  })

  return (
    <ul className="hm-wrapper">
      {albumItems}
    </ul>
  );
};

export default HonorableMentionAlbumGrid;
