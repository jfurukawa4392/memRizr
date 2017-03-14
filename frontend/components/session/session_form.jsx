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

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  render() {
    let header = this.props.formType;
    let link = (header === 'login' ? '/signup' : '/login');
    return (
      <div>
        <h1>{ header }</h1>
        <Link to={link}>{link.slice(1)}</Link>
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
