import {
  GET_TOP_MOVIES,
  GET_MOVIE_DETAIL,
  SEARCH_MOVIES,
} from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_TOP_MOVIES:
      return { ...state, toplist: action.payload };
    case GET_MOVIE_DETAIL:
      return { ...state, movie: action.payload };
    case SEARCH_MOVIES:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
