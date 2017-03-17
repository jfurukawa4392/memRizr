import React from 'react';
import NavBarContainer from './navbar_container';

const App = ({children}) => (
  <content>
    <NavBarContainer />
    { children }
  </content>
);

export default App;
