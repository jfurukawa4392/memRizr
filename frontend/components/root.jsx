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

const Root = ({store}) => {

  const _ensureLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/home');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/subjects');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/login"
                 component={SessionFormContainer} />
          <Route path="/signup"
                 component={SessionFormContainer} />
        </Route>
      </Router>
    </Provider>
  );
};


export default Root;
