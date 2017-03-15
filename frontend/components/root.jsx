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
// import SubjectIndexContainer from './subjects/subject_index_container';
import Home from './home';

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
          <Route path="/login"
                 component={SessionFormContainer}
                 onEnter={_redirectIfLoggedIn}
                 onLeave={_clearErrors}/>
          <Route path="/signup"
                 component={SessionFormContainer}
                 onEnter={_redirectIfLoggedIn}
                 onLeave={_clearErrors}/>
        </Route>
      </Router>
    </Provider>
  );
};


export default Root;
