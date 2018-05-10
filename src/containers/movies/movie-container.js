import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-bootstrap';
import { AppBar } from 'material-ui';

import { getTopMovies } from '../../redux/actions';
import * as movieHelpers from './movie-helpers';
import MovieList from '../../components/movie-list/movie-list.component';

class MovieBrowser extends React.Component {
  componentDidMount() {
    this.props.dispatch(getTopMovies(2));
  }

  render() {
    const { topMovies } = this.props;
    const movies = movieHelpers.getMoviesList(topMovies.toplist);

    return (
      <div>
        <AppBar title="Movie Browser" />
        <Grid>
          <Row>
            <p>Search will go here</p>
          </Row>
          <Row>
            <MovieList movies={movies} isLoading={topMovies.isLoading} />
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  topMovies: state.movieBrowser.movies,
});

export default connect(mapStateToProps)(MovieBrowser);
