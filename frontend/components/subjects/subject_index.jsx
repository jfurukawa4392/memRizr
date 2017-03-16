import React from 'react';

class SubjectIndex extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      activeSubject: 0
    };
  }

  componentWillMount(){
    if(this.props.subjects){
      this.props.getSubjects(this.props.currentUser);
    }
  }

  componentdidUpdate(){
    
  }

  render(){
    const indexItems = this.props.subjects

    return(
      <aside className="subjects-sidebar">
        <header className="subject-list-title">
          Subjects
        </header>
        <content className="subject-list">
          <ul>

          </ul>
        </content>
      </aside>
    );
  }
}

export default SubjectIndex;
