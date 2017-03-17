import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login } from './actions/session_actions';
import Modal from 'react-modal';
import * as SubjectActions from './actions/subject_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  Modal.setAppElement(root);
  window.store = store;
  window.state = store.getState;
  window.login = login;
  window.getSubj = SubjectActions.fetchSubject;
  window.getSubjects = SubjectActions.fetchSubjects;
  window.createSubject = SubjectActions.createSubject;

  ReactDOM.render(<Root store={store}/>, root);
});
