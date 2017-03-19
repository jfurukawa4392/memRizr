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
    console.log(this.state.title);
    this.props.createSubject({
      title: this.state.title,
      creator_id: userId
    });
  }

  render(){
    let { createSubject, currentUser } = this.props;
    return(
      <li>
        <form
          className="new-subject-form"
          onSubmit={() => this.submitForm()}>
          <input
            className="new-subject-form-title-input"
            type="text"
            onChange={(e) => this.update(e)}
            value={this.state.title} />
          <input
            className="new-subject-form-btn"
            type="submit"
            value="Create"/>
        </form>
      </li>
    );
  }
}

export default withRouter(SubjectForm);
