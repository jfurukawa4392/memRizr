import {
  RECEIVE_SUBJECTS,
  RECEIVE_SUBJECT,
  REMOVE_SUBJECT,
  CLEAR_SUBJECTS
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
      if(action.subject.subjectDetail.id){
        let id = action.subject.subjectDetail.id;
        newState = {};
        newState[id] = {
                         id,
                         title: action.subject.subjectDetail.title
                       };
        return merge({}, state, newState);
      } else {
        return state;
      }
    case(REMOVE_SUBJECT):
      newState = merge({}, state);
      delete newState[action.subject.id];
      return newState;
    case(CLEAR_SUBJECTS):
      return {};
    default:
      return state;
  }
};

export default SubjectsReducer;
