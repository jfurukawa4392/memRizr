import * as MainAPIUtil from '../util/main_api_util';

export const RECEIVE_SUBJECTS = 'RECEIVE_SUBJECTS';
export const RECEIVE_SUBJECT = 'RECEIVE_SUBJECT';
export const RECEIVE_SUBJECT_ERRORS = 'RECEIVE_SUBJECT_ERRORS';

export const fetchSubjects = (user = null) => (dispatch) => {
  if(user){
    MainAPIUtil.fetchFollowedSubjects()
               .then(res => dispatch(receiveSubjects(res)));
  } else {
    MainAPIUtil.fetchAllSubjects()
               .then(res => dispatch(receiveSubjects(res)));
  }
};

export const fetchSubject = (id) => (dispatch) => {
  MainAPIUtil.fetchSubjectDetail(id)
             .then(res => dispatch(receiveSubject(res)));
};

export const createSubject = (subject) => (dispatch) => {
  MainAPIUtil.createSubject(subject)
             .then(res => dispatch(receiveSubject(res)));
};

export const receiveSubjects = (subjects) => ({
  type: RECEIVE_SUBJECTS,
  subjects
});

export const receiveSubject = (subject) => ({
  type: RECEIVE_SUBJECT,
  subject
});
