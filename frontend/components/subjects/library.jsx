import React from 'react';
import SubjectIndex from './subject_index';
import SubjectDetail from './subject_detail';

class Library extends React.Component{
  componentDidMount(){
    this.props.getSubjects(this.props.currentUser);
  }

  render(){
    const { subjects, currentUser, subjectDetail, getSubject, createSubject } = this.props;
    if(subjects){
      let firstSubjectId = Object.keys(subjects)[0];
      return(
        <main className="user-main-library">
          <SubjectIndex
            subjects={subjects}
            currentUser={currentUser}
            activeSubject={subjectDetail}
            getSubject={getSubject}
            createSubject={createSubject}/>
          {this.props.children}
        </main>
      );
    } else{
      return (<div className="loading">No Subjects...</div>);
    }
  }
}

export default Library;
