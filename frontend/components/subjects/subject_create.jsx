import React from 'react';

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
    let { createSubject, currentUser } = this.props;
    return(
      <form
        className="new-subject-form"
        onSubmit={() => this.submitForm()}>
        <input
          className="new-form-title-input"
          type="text"
          onChange={() => this.update()}
          value={this.state.title} />
        <input
          type="submit"
          value="Create"/>
      </form>
    );
  }
}

export default SubjectForm;
