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
    console.log(this.props.location);
    if(this.props.location === '/my-subjects'){
      this.getSubjects(this.props.currentUser);
    } else {
      console.log('non-followed subjects');
    }
  }

  componentWillReceiveProps() {

  }
  
  subjectItemClick(id){
    this.getSubject(id);
  }

  componentdidUpdate(){
    // this.props.getSubject(this.props.subj)
  }

  render(){

    let indexItems = (<div className="empty-subject-holder"></div>);
    if(this.props.subjects){
      indexItems = this.props.subjects.map((subject, idx) => {
        return(
          <SubjectIndexItem
            key={idx}
            subject={subject}
            clickHandler={this.subjectItemClick.bind(this)}/>
        );
      });
    } else {

    }

    return(
      <aside className="subjects-sidebar">
        <header className="subject-list-title">
          Subjects
        </header>
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
