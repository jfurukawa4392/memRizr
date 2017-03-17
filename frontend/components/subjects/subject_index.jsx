import React from 'react';
import SubjectIndexItem from './subject_index_item';
import SubjectDetail from './subject_detail';

class SubjectIndex extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      showForm: false
    };
  }

  subjectItemClick(id){
    this.props.getSubject(id);
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
