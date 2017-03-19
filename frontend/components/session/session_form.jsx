import React from 'react';
import { withRouter, Link } from 'react-router';
import Modal from 'react-modal';

class SessionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: "",
          password: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.receiveErrors([]);
    this.props.closeModal();
  }

  componentDidUpdate() {
    if(this.props.loggedIn){
      this.props.closeModal();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.setState({
        username: "",
        password: ""
    });
    this.props.processForm(user);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  render() {
    let header = this.props.formType === 'login' ? "Log In" : "Sign Up";
    let errors = this.props.errors.map((err) => (<li>{err}</li>));
    return (
      <div className="modal-box">
        <div className="close-modal-button">
          <button
            onClick={() => this.props.closeModal()}
            className='close-modal'>X</button>
        </div>
        <div className="auth-input-form">
          <h1>{ header }</h1>
          <p className="errors">{errors}</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              Username:
              <input
                className="username-input"
                type="text"
                value={this.state.username}
                onChange={this.update("username")} />
            </label>
            <br />
            <label>
              Password:
              <input
                className="password-input"
                type="password"
                value={this.state.password}
                onChange={this.update("password")} />
            </label>
            <br />
            <div className="session-submit-input">
              <input
                type="submit"
                value={ header }/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
