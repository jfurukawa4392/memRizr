import {
  RECEIVE_SUBJECT,
  RECEIVE_SUBJECT_ERRORS,
  RECEIVE_FOLLOW_STATUS,
  REMOVE_SUBJECT,
  CLEAR_SUBJECT
} from '../actions/subject_actions';
import {
  REMOVE_DECK
} from '../actions/deck_actions';
import merge from 'lodash/merge';

const _nullSubject = {
  decks: [],
  subjectDetail: {
    id: null,
    title: "",
    creator: null,
    userFollows: false
  },
  errors: []
};

const SubjectDetailReducer = (state = _nullSubject, action) => {
  let newState;
  switch(action.type){
    case(RECEIVE_SUBJECT_ERRORS):
      newState = { errors: action.errors };
      return merge({}, _nullSubject, newState);
    case(RECEIVE_SUBJECT):
      return {
        decks: action.subject.decks,
        subjectDetail: action.subject.subjectDetail,
        errors: []
      };
    case(REMOVE_SUBJECT):
      if(action.subject.id === state.subjectDetail.id){
        return _nullSubject;
      } else {
        return state;
      }
    case(REMOVE_DECK):
      let newDecks = state.decks.filter((deck) => {
        return deck.id !== action.deckId;
      });
      newState = { decks: newDecks };
      return merge({}, state, newState);
    case(RECEIVE_FOLLOW_STATUS):
      newState = merge({}, state);
      newState.subjectDetail.userFollows = action.status;
      return newState;
    case(CLEAR_SUBJECT):
      return _nullSubject;
    default:
      return state;
  }
};

export default SubjectDetailReducer;
