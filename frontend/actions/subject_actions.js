import * as MainAPIUtil from '../util/main_api_util';

export const RECEIVE_SUBJECTS = 'RECEIVE_SUBJECTS';
export const RECEIVE_SUBJECT = 'RECEIVE_SUBJECT';
export const RECEIVE_SUBJECT_ERRORS = 'RECEIVE_SUBJECT_ERRORS';
export const RECEIVE_FOLLOW_STATUS = 'RECEIVE_FOLLOW_STATUS';
export const REMOVE_SUBJECT = 'REMOVE_SUBJECT';

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
               console.log('response is: ');
               console.log(res);
               dispatch(receiveFollowStatus(res.userFollows));
               dispatch(removeSubject(res.subject.id));
             });
};

export const deleteFollow = (subjectId) => (dispatch) => {
  MainAPIUtil.deleteFollow(subjectId)
             .then(res => dispatch(receiveFollowStatus(res)));
};

export const receiveFollowStatus = (status) => ({
  type: RECEIVE_FOLLOW_STATUS,
  status
});

export const removeSubject = (subjectId) => ({
  type: REMOVE_SUBJECT,
  subjectId
});

export const receiveSubjects = (subjects) => ({
  type: RECEIVE_SUBJECTS,
  subjects
});

export const receiveSubject = (subject) => ({
  type: RECEIVE_SUBJECT,
  subject
});
