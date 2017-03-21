import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SubjectsReducer from './subjects_reducer';
import SubjectDetailReducer from './subject_detail_reducer';
import DeckReducer from './deck_reducer';

const CLEAR_STATE = 'CLEAR_STATE';

const AppReducer = combineReducers({
  session: SessionReducer,
  subjects: SubjectsReducer,
  activeSubject: SubjectDetailReducer,
  activeDeck: DeckReducer,
});

const RootReducer = (state, action) => {
  if(action.type === CLEAR_STATE){
    state = undefined;
  }

  return AppReducer(state, action);
};

export default RootReducer;
