import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from './session/session_form_container';

const style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.75)',
    zIndex          : 10
  },
  content : {
    position        : 'fixed',
    top             : '100px',
    left            : '150px',
    right           : '150px',
    bottom          : '100px',
    border          : '1px solid #ccc',
    padding         : '20px',
    zIndex          : 11
  }
};

class NavBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      modalOpen: false,
      sessionFormType: undefined
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.loginClick = this.loginClick.bind(this);
    this.signupClick = this.signupClick.bind(this);
  }

  openModal() {
    this.setState({modalOpen: true});
  }

  closeModal() {
    console.log('closing modal in navbar');
    this.setState({modalOpen: false});
  }

  componentDidUpdate() {
  }

  loginClick() {
    this.setState({
      sessionFormType: 'login',
      modalOpen: true
    });
  }

  signupClick() {
    this.setState({
      sessionFormType: 'signup',
      modalOpen: true
    });
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
            <li>User: {this.props.currentUser.username}</li>
            <li id="last">
              <button onClick={this.props.logout}>Logout</button></li>
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
              <button onClick={this.loginClick}>Login</button>
            </li>
            <li id="last">
              <button onClick={this.signupClick}>Sign Up</button>
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
            <li>
              <Link to='/' className="site-title">memRizr</Link>
            </li>
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
        <div id="auth-modal">
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            contentLabel="Auth Modal"
            style={style}
            >
            <button onClick={this.closeModal}
                    className='close-modal'>X</button>
            <SessionFormContainer
              closeModal={this.closeModal}
              formType={this.state.sessionFormType}/>
          </Modal>
        </div>
        {auth_nav}
      </header>
    );
  }
}

export default NavBar;
