import * as SessionAPI from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const LOGOUT = 'LOGOUT';

export const login = (user) => (dispatch) => (
  SessionAPI.login(user)
            .then(res => dispatch(receiveCurrentUser(res)))
            .fail(res => dispatch(receiveErrors(res)))
);

export const logout = () => (dispatch) => (
  SessionAPI.logout()
            .then(() => dispatch(removeCurrentUser()))
            .fail(res => dispatch(receiveErrors(res)))
);

export const signup = (user) => (dispatch) => (
  SessionAPI.signup(user)
            .then(res => dispatch(receiveCurrentUser(res)))
            .fail(res => dispatch(receiveErrors(res)))
);

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errArr) => ({
  type: RECEIVE_ERRORS,
  errors: errArr
});

export const removeCurrentUser = () => ({
  type: LOGOUT
});
