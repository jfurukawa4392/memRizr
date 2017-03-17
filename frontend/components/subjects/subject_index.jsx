import React from 'react';
import SubjectIndexItem from './subject_index_item';
import SubjectDetail from './subject_detail';

class SubjectIndex extends React.Component{
  constructor(){
    super();

    this.showSubjectCreateForm = this.showSubjectCreateForm.bind(this);
  }

  componentDidMount(){
    this.props.getSubjects(this.props.currentUser);
  }

  subjectItemClick(id){
    this.props.getSubject(id);
  }

  showSubjectCreateForm(){

  }

  render(){

    let indexItems = (<div className="empty-subject-holder"></div>);
    if(this.props.subjects){
      indexItems = Object.keys(this.props.subjects).map((id, index) => {
        return(
          <SubjectIndexItem
            key={id}
            subject={this.props.subjects[id]}/>
        );
      });
    } else {

    }

    return(
      <aside className="subjects-sidebar">
        <section className="subject-list-title">
          Subjects
        </section>
        <content className="subject-list-content">
          <ul className="subject-list-ul">
            {indexItems}
          </ul>
        </content>
      </aside>
    );
  }
}

export default SubjectIndex;
