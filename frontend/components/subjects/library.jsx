import React from 'react';
import SubjectIndexContainer from './subject_index_container';
import SubjectDetail from './subject_detail';

class Library extends React.Component{
  componentDidMount(){
    this.props.getSubjects(this.props.currentUser);
  }

  render(){
    const subjects = this.props.subjects;
    if(subjects){
      let firstSubjectId = Object.keys(subjects)[0];
      return(
        <main className="user-main-library">
          <SubjectIndexContainer />
          {this.props.children}
        </main>
      );
    } else{
      return (<div className="loading">No Subjects...</div>);
    }
  }
}

export default Library;
