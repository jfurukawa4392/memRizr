import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from './session/session_form_container';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class NavBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render(){
    let loggedIn = Boolean(this.props.currentUser);
    let auth_nav;
    let myLib;
    if(loggedIn){
      // show account and logout buttons
      auth_nav = (
        <nav className="right">
          <ul>
            <li>{this.props.currentUser.username}</li>
            <li id="last"><button onClick={this.props.logout}>Logout</button></li>
          </ul>
        </nav>
      );
      //my library link if logged in
      myLib = (
        <li>
          <Link to="/my-subjects">My Subjects</Link>
        </li>
      );
    } else {
      auth_nav= (
        <nav className="right">
          <ul>
            <li id="login-button">
              <Link to="/login">Login</Link>
            </li>
            <li id="last">
              <Link to='/signup'>Sign Up</Link>
            </li>
          </ul>
        </nav>
      );
      //show login and sign up buttons
    }

    return(
      <header className="top-menu">
        <nav className="left">
          <ul>
            {myLib}
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>About</Link>
            </li>
            <li>

            </li>
          </ul>
        </nav>
        {auth_nav}
      </header>
    );
  }
}

export default NavBar;
