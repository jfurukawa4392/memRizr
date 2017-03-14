import React from 'react';
import { Link, withRouter } from 'react-router';

class NavBar extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    let loggedIn = Boolean(this.props.currentUser);
    let auth_nav;
    if(loggedIn){
      // show account and logout buttons
      auth_nav = (
        <nav className="right">
          <ul>
            <li>{this.props.currentUser.username}</li>
            <li><button onClick={this.props.logout}>Logout</button></li>
          </ul>
        </nav>
      );
    } else {
      auth_nav= (
        <nav className="right">
          <ul>
            <li><Link to='/login'>Login</Link></li>
            <li id="last"><Link to='/signup'>Sign Up</Link></li>
          </ul>
        </nav>
      );
      //show login and sign up buttons
    }

    return(
      <header className="top-menu">
        <nav className="left">
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>About</Link>
            </li>
          </ul>
        </nav>
        {auth_nav}
      </header>
    );
  }
}

export default NavBar;
