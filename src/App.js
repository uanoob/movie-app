import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MovieBrowser from './containers/movies/movie-container';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <MovieBrowser />
      </MuiThemeProvider>
    );
  }
}

export default App;
