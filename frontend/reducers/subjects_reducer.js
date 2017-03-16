import {
  RECEIVE_SUBJECTS,
  RECEIVE_SUBJECT
} from '../actions/subject_actions';
import merge from 'lodash/merge';

const _nullSubjects = {
  titles: []
};

const SubjectsReducer = (state = {}, action) => {
  let newState;
  switch(action.type){
    case(RECEIVE_SUBJECTS):
      newState = { titles: action.subjects };
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default SubjectsReducer;
