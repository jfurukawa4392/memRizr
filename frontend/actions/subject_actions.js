import * as MainAPIUtil from '../util/main_api_util';

export const RECEIVE_SUBJECTS = 'RECEIVE_SUBJECTS';
export const RECEIVE_SUBJECT = 'RECEIVE_SUBJECT';
export const RECEIVE_SUBJECT_ERRORS = 'RECEIVE_SUBJECT_ERRORS';
export const RECEIVE_FOLLOW_STATUS = 'RECEIVE_FOLLOW_STATUS';
export const REMOVE_SUBJECT = 'REMOVE_SUBJECT';
export const CLEAR_SUBJECT = 'CLEAR_SUBJECT';
export const CLEAR_SUBJECTS = 'CLEAR_SUBJECTS';

export const fetchSubjects = (user = null) => (dispatch) => {
  if(user){
    return MainAPIUtil.fetchFollowedSubjects()
               .then(res => dispatch(receiveSubjects(res)));
  } else {
    return MainAPIUtil.fetchAllSubjects()
               .then(res => dispatch(receiveSubjects(res)));
  }
};

export const fetchSubject = (id) => (dispatch) => {
  MainAPIUtil.fetchSubjectDetail(id)
             .then(res => dispatch(receiveSubject(res)));
};

export const createSubject = (subject) => (dispatch) => {
  MainAPIUtil.createSubject(subject)
             .then(res => {
               MainAPIUtil.fetchFollowedSubjects()
                          .then(subs => {
                            dispatch(receiveSubjects(subs));
                            dispatch(receiveSubject(res));
                          });
             });
};

export const createFollow = (subjectId) => (dispatch) => {
  MainAPIUtil.createFollow(subjectId)
             .then(res => {
               dispatch(receiveFollowStatus(res.userFollows));
               dispatch(receiveSubject(res));
             });
};

export const deleteFollow = (subjectId) => (dispatch) => {
  MainAPIUtil.deleteFollow(subjectId)
             .then(res => {
               dispatch(receiveFollowStatus(res.userFollows));
               dispatch(removeSubject(res.subject));
             });
};

export const receiveFollowStatus = (status) => ({
  type: RECEIVE_FOLLOW_STATUS,
  status
});

export const removeSubject = (subject) => ({
  type: REMOVE_SUBJECT,
  subject
});

export const receiveSubjects = (subjects) => ({
  type: RECEIVE_SUBJECTS,
  subjects
});

export const receiveSubject = (subject) => ({
  type: RECEIVE_SUBJECT,
  subject
});

export const clearActiveSubject = () => ({
  type: CLEAR_SUBJECT
});

export const clearSubjects = () => ({
  type: CLEAR_SUBJECTS
});
