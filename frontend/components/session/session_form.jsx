import React from 'react';
import { withRouter, Link } from 'react-router';


class SessionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: "",
          password: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
  		this.redirectIfLoggedIn();
  	}

  componentWillUnmount() {
    this.props.receiveErrors([]);
  }

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
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
    let header = this.props.formType;
    return (
      <div>
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
