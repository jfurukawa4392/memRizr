import React from 'react';
import { withRouter } from 'react-router';

//need currentUser and createSubject action as props
class SubjectForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: ""
    };

    this.update = this.update.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  update(e){
    this.setState({
      title: e.target.value,
    });
  }

  submitForm(){
    let userId = this.props.currentUser.id;
    this.props.createSubject({
      title: this.state.title,
      creator_id: userId
    });
  }

  render(){
    let { createSubject, currentUser, cancel } = this.props;
    return(
      <li className="new-subject-form-wrapper">
        <h4>New Subject:</h4>
        <form
          className="new-subject-form"
          onSubmit={() => this.submitForm()}>
          <input
            className="new-subject-form-title-input"
            type="text"
            onChange={(e) => this.update(e)}
            value={this.state.title} />
          <div className="subject-create-btn-wrapper">
            <input
              className="new-subject-btn"
              type="submit"
              value="Create"/>
            <button
              className="new-subject-btn"
              onClick={() => cancel()}>
              Cancel
            </button>
          </div>
        </form>
      </li>
    );
  }
}

export default withRouter(SubjectForm);
