import React, {Component} from 'react';
import AlbumList from './album_list.json';
import AlbumGrid from './components/album_grid';
import SelectedAlbumDetails from './components/selected_album_details';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      // Looks like React knows how to treat the JSON file
      albums: AlbumList,
      selectedAlbum: null
    }
    console.log(AlbumList);
    console.log(this.state.selectedAlbum);
  }

  render() {
    return (
      <div className="vertical-center">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <AlbumGrid
                onAlbumSelect={selectedAlbum => this.setState({selectedAlbum})}
                albums={this.state.albums} />
                <div className="order">(in no particular order)</div>
            </div>
            <div className="col-md-7">
              <div className="selected-album shadow">
                <div className="container-fluid">
                  <div className="row">
                    <SelectedAlbumDetails album={this.state.selectedAlbum} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
