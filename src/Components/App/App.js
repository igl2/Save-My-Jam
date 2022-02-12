import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: 'Who\'s In Your Head', artist: 'Jonas Brothers', album: 'Who\'s In Your Head', id: 1},
        {name: 'My Jesus', artist: 'Anne Wilson', album: 'My Jesus', id: 2},
        {name: 'Fly Away', artist: 'Lenny Kravitz', album: '5', id: 3}
      ],
      playlistName: 'My Playlist',
      playlistTracks: [
        {name: 'Cool', artist: 'Jonas Brothers', album: 'Happiness Begins', id: 4},
        {name: 'Light Switch', artist: 'Charlie Puth', album: 'Light Switch', id: 5},
        {name: 'I Believe', artist: 'Jonas Brothers', album: 'Happiness Begins', id: 6}
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    
    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar />
          <div class="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} 
                      playlistTracks={this.state.playlistTracks} 
                      onRemove={this.removeTrack}
                      onNameChange={this.updatePlaylistName}
                      />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
