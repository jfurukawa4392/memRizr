import React from 'react';
import SubjectIndexItem from './subject_index_item';
import SubjectDetail from './subject_detail';
import SubjectForm from './subject_create';

class SubjectIndex extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      showForm: false
    };

    this.newFormClick = this.newFormClick.bind(this);
  }

  subjectItemClick(id){
    this.props.getSubject(id);
  }

  newFormClick(){
    this.setState({
      showForm: (this.state.showForm ? false : true)
    });
  }

  render(){
    let { createSubject, currentUser} = this.props;

    let newSubjectForm = this.state.showForm ? <SubjectForm
      createSubject={createSubject}
      currentUser={currentUser}
      cancel={this.newFormClick}/> : <div className="hide-subject-form"></div>;

    let indexItems = (<div className="empty-subject-holder"></div>);
    if(this.props.subjects){
      indexItems = Object.keys(this.props.subjects).map((id, index) => {
        return(
          <SubjectIndexItem
            key={id}
            subject={this.props.subjects[id]}/>
        );
      });
    }

    return(
      <aside className="subjects-sidebar">
        <section className="subject-list-title">
          Subjects
          <button
            className="render-newSubject-btn"
            onClick={() => this.newFormClick()}>
            <i className="fa fa-plus"></i>
          </button>
        </section>
        <content className="subject-list-content">
          <ul className="subject-list-ul">
            {indexItems}
            {newSubjectForm}
          </ul>
        </content>
      </aside>
    );
  }
}

export default SubjectIndex;
