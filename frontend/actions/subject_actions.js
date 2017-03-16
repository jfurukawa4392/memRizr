import * as MainAPIUtil from '../util/main_api_util';

export const RECEIVE_SUBJECTS = 'RECEIVE_SUBJECTS';
export const RECEIVE_SUBJECT = 'RECEIVE_SUBJECT';

export const fetchSubjects = (user = null) => (dispatch) => {
  if(user){
    MainAPIUtil.fetchFollowedSubjects()
               .then(res => dispatch(receiveSubjects(res)));
  } else {
    MainAPIUtil.fetchAllSubjects()
               .then(res => dispatch(receiveSubjects(res)));
  }
};

export const receiveSubjects = (subjects) => ({
  type: RECEIVE_SUBJECTS,
  subjects
});
