import React from 'react';
import NavBarContainer from './navbar_container';

const App = ({children}) => (
  <content>
    <NavBarContainer />
    <div className="spacer">
      &nbsp;
      <p></p>
    </div>
    { children }
  </content>
);

export default App;
