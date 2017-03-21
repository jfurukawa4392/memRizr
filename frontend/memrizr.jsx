import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';
import * as SubjectActions from './actions/subject_actions';
import * as DeckActions from './actions/deck_actions';

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
  window.getSubj = SubjectActions.fetchSubject;
  window.getSubjects = SubjectActions.fetchSubjects;
  window.createSubject = SubjectActions.createSubject;
  window.getDeck = DeckActions.fetchDeck;
  window.createRating = DeckActions.createCardRating;

  ReactDOM.render(<Root store={store}/>, root);
});
