import {
  RECEIVE_SUBJECTS,
  RECEIVE_SUBJECT,
  REMOVE_SUBJECT
} from '../actions/subject_actions';
import { RECEIVE_RESULTS } from '../actions/search_actions';
import merge from 'lodash/merge';

const SubjectsReducer = (state = {}, action) => {
  let newState;
  switch(action.type){
    case(RECEIVE_SUBJECTS):
      return action.subjects;
    case(RECEIVE_RESULTS):
      return merge({}, action.subjects);
    case(RECEIVE_SUBJECT):
      newState = merge({}, state);
      newState[action.subject.id] = action.subject;
      return newState;
    case(REMOVE_SUBJECT):
      newState = merge({}, state);
      console.log('action is: ');
      console.log(action);
      delete newState[action.subjectId];
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default SubjectsReducer;
