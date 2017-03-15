import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  LOGOUT
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
      newState = {
                   currentUser: action.user,
                   errors: []
                 };
      return merge({}, state, newState);
    case(RECEIVE_ERRORS):
      newState = {errors: action.errors};
      return merge({}, state, newState);
    case(LOGOUT):
      newState = _nullUser;
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default SessionReducer;
