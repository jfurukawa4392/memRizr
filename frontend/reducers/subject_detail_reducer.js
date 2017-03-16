import {
  RECEIVE_SUBJECT
} from '../actions/subject_actions';
import merge from 'lodash/merge';

const _nullSubject = {
  decks: []
};

const SubjectDetailReducer = (state = {}, action) => {
  let newState;
  switch(action.type){
    case(RECEIVE_SUBJECT):
      newState = { subjectDetail: action.subject };
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default SubjectDetailReducer;
