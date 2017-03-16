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

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.setState({
        username: "",
        password: ""
    });
    this.props.closeModal();
    this.props.processForm(user);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  render() {
    let header = this.props.formType === 'login' ? "Log In" : "Sign Up";
    return (
      <div className="auth-input-form">
        <h1>{ header }</h1>
        <h4>{this.props.errors}</h4>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")} />
          </label>
          <br />
          <label>
            Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")} />
          </label>
          <br />
          <input type="submit" value={ header }/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
