import React from 'react';
import { Router,
         Route,
         IndexRoute,
         hashHistory
       } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import SessionFormContainer from './session/session_form_container';

const Root = ({store}) => {
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
