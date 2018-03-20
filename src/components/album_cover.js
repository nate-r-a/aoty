import React from 'react';

// I only need album and onAlbumSelect from the props here,
// so I'm only calling for those two
const AlbumCover = ({album, onAlbumSelect}) => {
  return (
    <div onClick={() => onAlbumSelect(album)} className="box shadow">
      <img src={album.cover_url} className="album-cover" />
    </div>
  );
};

export default AlbumCover;
