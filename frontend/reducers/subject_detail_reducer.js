import {
  RECEIVE_SUBJECT
} from '../actions/subject_actions';
import merge from 'lodash/merge';

const _nullSubject = {
  decks: [],
  subjectDetail: null
};

const SubjectDetailReducer = (state = _nullSubject, action) => {
  let newState;
  switch(action.type){
    case(RECEIVE_SUBJECT):
      return {
        decks: action.subject.decks,
        subjectDetail: action.subject.subjectDetail
      };
    default:
      return state;
  }
};

export default SubjectDetailReducer;
