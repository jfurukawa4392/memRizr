import { createStore, applyMiddleware } from 'react-redux';
import rootReducer from 'root_reducer';
import thunk from 'redux-thunk';

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
);

export default configureStore;
