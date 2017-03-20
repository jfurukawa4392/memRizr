import React from 'react';
import { Router,
         Route,
         IndexRoute,
         hashHistory
       } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import SearchContainer from './search/search_container';
import { receiveErrors } from '../actions/session_actions';
import LibraryContainer from './subjects/library_container';
import SubjectDetailContainer from './subjects/subject_detail_container';
import Home from './home';
import DeckStudyContainer from './study/deck_study_container';

const Root = ({store}) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _clearErrors = () => {
    store.dispatch(receiveErrors([]));
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route
            path="/my-subjects"
            component={LibraryContainer}
            onEnter={_ensureLoggedIn}>
            <IndexRoute component={SubjectDetailContainer} />
            <Route
              path="/my-subjects/:subjectId"
              component={SubjectDetailContainer} />
          </Route>
          <Route
            path="/study/:deckId"
            component={DeckStudyContainer} />
        </Route>
      </Router>
    </Provider>
  );
};


export default Root;
