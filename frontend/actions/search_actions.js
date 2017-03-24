import * as MainAPIUtil from '../util/main_api_util';

export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';
export const RECEIVE_FAST_RESULTS = 'RECEIVE_FAST_RESULTS';

export const fetchResults = (query, now = null) => dispatch => {
  if(now){
    // go to component as promise to chain setState on
    return MainAPIUtil.requestResults(query);
  } else {
    // go to state.subjects
    MainAPIUtil.requestResults(query)
               .then(results => {
                 dispatch(receiveResults(results));
               });
  }
};

export const receiveResults = (subjects) => ({
  type: RECEIVE_RESULTS,
  subjects
});

export const receiveFastResults = (results) => ({
  type: RECEIVE_FAST_RESULTS,
  results
});
