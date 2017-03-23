import React from 'react';
import SubjectIndex from './subject_index';
import SubjectDetail from './subject_detail';
import NavBarContainer from '../navbar_container';

class Library extends React.Component{
  componentDidMount(){
    this.props.getSubjects(this.props.currentUser)
      .then(() => {
        if(this.props.params.subjectId){
          this.props.getSubject(this.props.params.subjectId);
        } else {
          if(this.props.subjects) {
            this.props.getSubject(Object.keys(this.props.subjects)[0]);
          }
        }
      });
  }

  render(){
    const { subjects, currentUser, subjectDetail, getSubject, createSubject } = this.props;
    if(subjects){
      let firstSubjectId = Object.keys(subjects)[0];
      return(
        <div>
          <NavBarContainer />
          <main className="user-main-library">
            <SubjectIndex
              subjects={subjects}
              currentUser={currentUser}
              activeSubject={subjectDetail}
              getSubject={getSubject}
              createSubject={createSubject}/>
            {this.props.children}
          </main>
        </div>
      );
    } else{
      return (<div className="loading">No Subjects...</div>);
    }
  }
}

export default Library;
