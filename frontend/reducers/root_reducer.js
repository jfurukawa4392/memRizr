import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SubjectsReducer from './subjects_reducer';
import SubjectDetailReducer from './subject_detail_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  subjects: SubjectsReducer,
  activeSubject: SubjectDetailReducer
});

export default rootReducer;
