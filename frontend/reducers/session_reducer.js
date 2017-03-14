import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _nullUser, action) => {
  let newState;
  switch(action.type){
    case(RECEIVE_CURRENT_USER):
      newState = { currentUser: action.user};
      return merge({}, state, newState);
    case(RECEIVE_ERRORS):
      newState = action.errors;
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default SessionReducer;
