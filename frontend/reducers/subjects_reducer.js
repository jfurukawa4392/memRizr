import {
  RECEIVE_SUBJECTS,
  RECEIVE_SUBJECT
} from '../actions/subject_actions';
import merge from 'lodash/merge';

const SubjectsReducer = (state = {}, action) => {
  switch(action.type){
    case(RECEIVE_SUBJECTS):
      return action.subjects;
    default:
      return state;
  }
};

export default SubjectsReducer;
