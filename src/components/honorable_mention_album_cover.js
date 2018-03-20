import React from 'react';

const HonorableMentionAlbumCover = ({album, onAlbumSelect}) => {
  return (
    <div onClick={() => onAlbumSelect(album)} className="box hm-box hm-shadow">
      <img src={album.cover_url} className="hm-album-cover" />
    </div>
  )
}

export default HonorableMentionAlbumCover;
