import {
  RECEIVE_SUBJECTS,
  RECEIVE_SUBJECT
} from '../actions/subject_actions';
import { RECEIVE_RESULTS } from '../actions/search_actions';
import merge from 'lodash/merge';

const SubjectsReducer = (state = {}, action) => {
  switch(action.type){
    case(RECEIVE_SUBJECTS):
      return action.subjects;
    case(RECEIVE_RESULTS):
      return merge({}, action.subjects);
    default:
      return state;
  }
};

export default SubjectsReducer;
