import React from 'react';
import SubjectIndexItem from './subject_index_item';

class SubjectIndex extends React.Component{
  constructor(){
    super();

    this.state = {
      activeSubjectId: 0
    };
  }

  componentWillMount(){
    if(this.props.location.pathname === '/my-subjects'){
      this.props.getSubjects(this.props.currentUser);
    } else {
      console.log('non-followed subjects');
    }
  }

  componentWillReceiveProps(nextProps) {

  }

  subjectItemClick(id){
    this.props.getSubject(id);
  }

  componentdidUpdate(){
    // this.props.getSubject(this.props.subj)
  }

  render(){

    let indexItems = (<div className="empty-subject-holder"></div>);
    if(this.props.subjects){
      indexItems = Object.keys(this.props.subjects).map((id, index) => {
        return(
          <SubjectIndexItem
            key={id}
            subject={this.props.subjects[id]}
            clickHandler={this.subjectItemClick.bind(this)}/>
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
