import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import newReleasesReducer from '../reducers/newReleases';
import featuredPlaylistsReducer from '../reducers/featuredPlaylists';
import categoriesReducer from '../reducers/categories';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    newReleases: newReleasesReducer,
    featuredPlaylists: featuredPlaylistsReducer,
    categories: categoriesReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;