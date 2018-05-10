import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddlware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { createLogger } from 'redux-logger';
import movieReducer from './redux/reducers';

const rootReducer = combineReducers({
  movieBrowser: movieReducer,
});

const loggerMiddleware = createLogger();

const middleware = applyMiddleware(
  promiseMiddleware,
  thunkMiddlware,
  loggerMiddleware,
);

const store = createStore(rootReducer, middleware);

export default store;
